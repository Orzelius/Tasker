import axios, { AxiosResponse } from 'axios';
import { Auth, User, AsyncActionStatus } from "../types/models";
import { AppThunk, LOGIN, LOGOUT,  AuthAction, AppAction, SET_STATUS } from "../types/types";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

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
const Status = (status: AsyncActionStatus): AuthAction => {
  return {
    type: SET_STATUS,
    status
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


export const ThunkLogin = (username: string, password: string): ThunkAction<Promise<boolean>, {}, {}, AppAction> => {
  let auth: Auth = {
    loggedIn: true,
    status: AsyncActionStatus.STARTED,
    user: undefined
  }
  return async (dispatch: ThunkDispatch<{}, {}, AppAction>): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      dispatch(Status(AsyncActionStatus.STARTED));
      console.log('Login in progress');
      axios.post('http://demo2.z-bit.ee/users/get-token', {
        username,
        password
      })
      .then((res: AxiosResponse<User>) => {
        const data = res.data;
        if (typeof data.id != 'undefined') {
          auth = { loggedIn: true, status: AsyncActionStatus.SUCCEEDED, user: { ...data } }
          console.log("Logged in as: ", auth)
          dispatch(Login(auth));
          resolve(true);
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