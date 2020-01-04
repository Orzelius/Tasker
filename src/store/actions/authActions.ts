import Axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AsyncActionStatus, Auth, User } from "../types/models";
import { AppAction, AppThunk, AuthAction, LOGIN, LOGOUT } from "../types/types";
import { Status } from './globalActions';
import { ThunkGetTasks } from './taskActions';

const Login = (auth: Auth): AuthAction => {
  return {
    type: LOGIN,
    auth
  }
}
const Logout = (): AuthAction => {
  return {
    type: LOGOUT
  }
}

// export const ThunkLogin = (username: string, password: string): AppThunk => async dispatch => {
//   // const asyncResp = await exampleAPI()
//   let auth: Auth = {
//     loggedIn: true,
//     isFetching: true,
//     user: undefined
//   }
//   axios.post('http://demo2.z-bit.ee/users/get-token', {
//     username,
//     password
//   })
//     .then((res: AxiosResponse<User>) => {
//       const data = res.data;
//       if (typeof data.id != 'undefined') {
//         auth = { loggedIn: true, isFetching: false, user: { ...data } }
//         console.log("Logged in as: ", auth)
//         dispatch(Login(auth));
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       let errorMsg = 'Incorrect password or username';
//       console.log(errorMsg);
//     })
// }
export const ThunkLogout = (): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  console.log("Logging out");
  dispatch(Logout());
}

export const ThunkRegister = (user: User, password: string): ThunkAction<Promise<boolean>, {}, {}, AppAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AppAction>): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      Axios.post('http://demo2.z-bit.ee/users', {
        username: user.username,
        firstname: user.firstname,
        lastName: user.lastname,
        newPassword: password
      })
        .then((res) => {
          console.log(res);
          if(res.status === 201){
            dispatch(ThunkLogin(user.username, password));
          }
        })
        .catch((error) => {
          console.log(error);
        })
    });
  }
}

export const ThunkLogin = (username: string, password: string): ThunkAction<Promise<boolean>, {}, {}, AppAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AppAction>): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      let auth: Auth = {
        loggedIn: true,
        status: AsyncActionStatus.STARTED,
        user: undefined
      }
      dispatch(Status(AsyncActionStatus.STARTED));
      console.log('Login in progress');
      Axios.post('http://demo2.z-bit.ee/users/get-token', {
        username,
        password
      })
        .then((res: AxiosResponse<User>) => {
          const data = res.data;
          if (data.access_token) {
            auth = { loggedIn: true, status: AsyncActionStatus.SUCCEEDED, user: { ...data } }
            console.log("Logged in as: ", auth)
            dispatch(Login(auth));
            dispatch(ThunkGetTasks(data.access_token));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(Status(AsyncActionStatus.FAILED));
          resolve(false);
        })
    });
  }
}