using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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

        // GET: /task
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetAll() {
            return Ok(_taskService.GetAll());
        }


        // POST: /task
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


        // DELETE: /task/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            try {
                _taskService.Delete(id);
                return Ok();
            }
            catch (AppException ex) {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
