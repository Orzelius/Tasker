using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Linq;
using System.Text;
using Tasker.Data.MappingProfiles;
using Tasker.Helpers;
using Tasker.Services;

namespace Tasker {
    public class Startup {
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;

        public Startup(IWebHostEnvironment env, IConfiguration configuration) {
            _env = env;
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            //// use sql server db in production and sqlite db in development
            //if (_env.IsProduction())
            //    services.AddDbContext<DataContext>();
            //else
            services.AddDbContext<DataContext, SqliteDataContext>();

            services.AddCors();
            services.AddControllers();
            // Auto Mapper Configurations
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new ProjectProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();

            //services.AddSingleton(mapper);
            services.AddAutoMapper(GetType().Assembly);


            services.AddMvc();
            services.AddSingleton<UserProvider>();

            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ITaskService, TaskService>();

            // configure strongly typed settings objects
            var appSettingsSection = _configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x => {
                x.Events = new JwtBearerEvents {
                    OnTokenValidated = context => {
                        var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
                        var userProvider = context.HttpContext.RequestServices.GetRequiredService<UserProvider>();
                        var userId = int.Parse(context.Principal.Identity.Name);
                        var user = userService.GetById(userId);
                        userProvider.setUser(user);
                        if (user == null) {
                            // return unauthorized if user no longer exists
                            context.Fail("Unauthorized");
                        }
                        return System.Threading.Tasks.Task.CompletedTask;
                    }
                };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // configure DI for application services

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, DataContext dataContext) {
            // migrate any database changes on startup (includes initial db creation)
            //dataContext.Database.Migrate();
            dataContext.Database.EnsureCreated();
            if (dataContext.Tasks.Count() == 0) {
                //dataContext.Database.EnsureDeleted();
                for (int i = 0; i < 10; i++) {
                    dataContext.Tasks.Add(new Data.Task() {
                        Created_at = DateTime.Now,
                        Desc = Faker.TextFaker.Sentence(),
                        Marked_as_done = false,
                        Title = Faker.TextFaker.Sentence()
                    });
                }
            }

            app.UseRouting();

            // global cors policy
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}
