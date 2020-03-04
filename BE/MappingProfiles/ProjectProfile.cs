using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
