import { Task, User } from "./models";
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
const LOGIN = "LOGIN"

interface Login{
  type: typeof LOGIN;
  user: User
}

export type AppThunk = ThunkAction<void, AppState, null, AppAction>

export type UserAction = Login;
export type TaskAction = SetTaskAction | AddTaskAction | RemoveTaskAction | EditTaskAction;
export type AppAction = TaskAction | UserAction;