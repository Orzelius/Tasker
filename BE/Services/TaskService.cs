using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tasker.Data;
using Tasker.Helpers;

//GET /tasks Get list of tasks
//GET /tasks/{id}	Get details of specific task
//PUT /tasks/{id}	Update task
//POST /tasks Create a new task
//DELETE /tasks/{id}	Delete task

namespace Tasker.Services {
    public interface ITaskService {
        IEnumerable<Data.Task> GetAll();
        Data.Task GetById(int id);
        Data.Task Create(Data.Task task);
        void Update(Data.Task task);
        void Delete(int id);
    }
    public class TaskService : ITaskService {

        private DataContext _context;
        private UserProvider _userProvider;

        public TaskService(DataContext context, UserProvider userProvider) {
            _context = context;
            _userProvider = userProvider;
        }

        public Data.Task Create(Data.Task task) {
            // validation
            if (string.IsNullOrWhiteSpace(task.Title))
                throw new AppException("Title is required");

            _context.Tasks.Add(task);
            _context.SaveChanges();
            task.owner = _userProvider.getUser();

            return task;
        }

        public void Delete(int id) {
            _context.Tasks.Remove(_context.Tasks.FirstOrDefault(t => t.Id == id));
            _context.SaveChanges();

            return;
        }

        public IEnumerable<Data.Task> GetAll() {
            return _context.Tasks.ToList();
        }

        public Data.Task GetById(int id) {
            throw new NotImplementedException();
        }

        public void Update(Data.Task task) {
            throw new NotImplementedException();
        }
    }
}
