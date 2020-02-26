import { Auth, AsyncActionStatus } from '../types/models';
import { AuthAction, LOGIN, LOGOUT, SET_STATUS } from '../types/types';

const initState: Auth =
  { loggedIn: false, status: AsyncActionStatus.UNSTARTED}

const authReducer = (state = initState, action: AuthAction): Auth => {
  switch (action.type) {
    case (LOGIN):
      return action.auth;
    case (LOGOUT):
      const auth: Auth = {
        loggedIn: false,
        status: AsyncActionStatus.UNSTARTED
      }
      return auth;
    case (SET_STATUS):
      return ({loggedIn: state.loggedIn, status: action.status, user: state.user});
    default:
      return state;
  }
}

export default authReducer;