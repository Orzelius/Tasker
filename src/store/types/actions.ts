import { Task, User } from "./models";

//TASK ACTIONS
const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const SET_TASK = "SET_TASK";

interface AddTaskAction {
  type: typeof ADD_TASK;
  Task: Task;
}
interface EditTaskAction {
  type: typeof EDIT_TASK;
  Task: Task;
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

export type UserAction = Login;
export type TaskAction = SetTaskAction | AddTaskAction | RemoveTaskAction | EditTaskAction;
export type AppAction = TaskAction | UserAction;