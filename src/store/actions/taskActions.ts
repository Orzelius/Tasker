import { Task } from "../types/models";
import { TaskAction, AppThunk } from "../types/types";
import { ADD_TASK } from '../types/types'
import uuid from "uuid";

const addTask = (task: Task): TaskAction => {
  return{
    type: ADD_TASK,
    task
  }
}

export const ThunkAddTask = (task: Task): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  console.log("Adding task", task);
  task.created_at = Date.now();
  task.key = uuid();
  dispatch(addTask(task));
}