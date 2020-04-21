using AutoMapper;
using Tasker.Models.Tasks;
using Tasker.Models.Users;

namespace Tasker.Data.MappingProfiles {
    public class ProjectProfile : Profile {
        public ProjectProfile() {
            CreateMap<Task, TaskCreateModel>();
            CreateMap<TaskCreateModel, Task>();
            CreateMap<User, UserModel>();
            CreateMap<RegisterModel, User>();
            CreateMap<UpdateModel, User>();
            CreateMap<User, RegisterModel>();
            CreateMap<User, UpdateModel>();
            CreateMap<User, UserModel>();
        }
    }
}
