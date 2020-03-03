using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasker.Models.Tasks;

namespace Tasker.Data.MappingProfiles {
    public class ProjectProfile : Profile {
        public ProjectProfile() {
            CreateMap<Task, TaskCreateModel>();
        }
    }
}
