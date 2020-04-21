using Tasker.Data;

namespace Tasker.Helpers {
    public class UserProvider {
        private User _user;

        public void setUser(User user) {
            _user = user;
        }

        public User getUser() {
            return _user;
        }
    }
}
