import { Task } from "../types/models";
import { TaskAction, AppThunk, REMOVE_TASK, EDIT_TASK } from "../types/types";
import { ADD_TASK } from '../types/types'

const addTask = (task: Task): TaskAction => {
  return{
    type: ADD_TASK,
    task
  }
}
const removeTask = (id: string): TaskAction => {
  return{
    type: REMOVE_TASK,
    id
  }
}
const editTask = (task: Task): TaskAction => {
  return{
    type: EDIT_TASK,
    task
  }
}

export const ThunkAddTask = (task: Task): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  console.log("Adding task", task);
  task.created_at = Math.round((new Date()).getTime() / 1000);
  dispatch(addTask(task));
}
export const ThunkRemoveTask = (id: string): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  console.log("Removing task: ", id);
  dispatch(removeTask(id));
}
export const ThunkEditTask = (task: Task): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  console.log("Editing task", task);
  dispatch(editTask(task));
}