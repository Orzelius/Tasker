using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Tasker.Helpers;
using Tasker.Models.Tasks;
using Tasker.Services;

namespace Tasker.Controllers {
    [Route("/task")]
    [ApiController]
    [Authorize]
    public class TaskController : ControllerBase {
        private IMapper _mapper;
        private ITaskService _taskService;

        public TaskController(IMapper mapper, IOptions<AppSettings> appSettings, ITaskService taskService) {
            _mapper = mapper;
            _taskService = taskService;
        }

        // GET: api/Task
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetAll() {
            return Ok(_taskService.GetAll());
        }

        // GET: api/Task/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id) {
            return "value";
        }

        // POST: api/Task
        [HttpPost]
        public IActionResult Post([FromBody] TaskCreateModel model) {
            var task = _mapper.Map<Data.Task>(model);

            try {
                _taskService.Create(task);
                return Ok();
            }
            catch (AppException ex) {
                return BadRequest(new { message = ex.Message });
            }
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}
