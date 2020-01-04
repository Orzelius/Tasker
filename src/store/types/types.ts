import { Task, Auth, AsyncActionStatus } from "./models";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducers/rootReducer";

//TASK ACTIONS
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const SET_TASK = "SET_TASK";

interface AddTaskAction {
  type: typeof ADD_TASK;
  task: Task;
}
interface EditTaskAction {
  type: typeof EDIT_TASK;
  task: Task;
}
interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  id: string;
}
interface SetTaskAction {
  type: typeof SET_TASK;
  tasks: Task[];
}


//USER ACTIONS
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const SET_STATUS = "SET_FETCH"

interface LoginAction{
  type: typeof LOGIN;
  auth: Auth
}
interface LogoutAction{
  type: typeof LOGOUT;
}
interface FetchingAction{
  type: typeof SET_STATUS;
  status: AsyncActionStatus;
}


export type ThunkResult<R> = ThunkAction<R, AppState, undefined, AppAction>;
export type AppThunk = ThunkAction<void, AppState, null, AppAction>

export type AuthAction = LoginAction | LogoutAction | FetchingAction;
export type TaskAction = SetTaskAction | AddTaskAction | RemoveTaskAction | EditTaskAction;
export type AppAction = TaskAction | AuthAction;