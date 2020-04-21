using System;
using System.ComponentModel.DataAnnotations;

namespace Tasker.Data {
    public class Task {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Desc { get; set; }
        public bool Marked_as_done { get; set; }
        public DateTime Created_at { get; set; }
        public User owner;
    }
}
