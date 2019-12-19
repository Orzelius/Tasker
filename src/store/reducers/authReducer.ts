import {User} from '../types/models';
import {UserAction} from '../types/actions';

const initState: User = 
  {loggedIn: false }

const authReducer = (state = initState, action: UserAction): User => {
  return state;
}

export default authReducer;