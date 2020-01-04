import { Task, AsyncActionStatus } from "../types/models";
import { TaskAction, AppThunk, REMOVE_TASK, EDIT_TASK, SET_TASK, AppAction } from "../types/types";
import { ADD_TASK } from '../types/types'
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Status } from "./globalActions";
import Axios, { AxiosResponse } from "axios";

const addTask = (task: Task): TaskAction => {
  return {
    type: ADD_TASK,
    task
  }
}
const removeTask = (id: string): TaskAction => {
  return {
    type: REMOVE_TASK,
    id
  }
}
const editTask = (task: Task): TaskAction => {
  return {
    type: EDIT_TASK,
    task
  }
}
const setTask = (tasks: Task[]): TaskAction => {
  return {
    type: SET_TASK,
    tasks
  }
}

export const ThunkAddTask = (task: Task, access_token: string): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  console.log("Adding task", task);
  Axios.post('http://demo2.z-bit.ee/tasks', { title: task.title, desc: task.desc }, {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 201) {
        dispatch(addTask(task));
      }
    })
    .catch(function (error) {
      console.log("failed to add a task: ", error);
    });
  task.created_at = Math.round((new Date()).getTime() / 1000);
}
export const ThunkRemoveTask = (id: string, access_token: string): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  Axios.delete('http://demo2.z-bit.ee/tasks/' + id, {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  })
    .then(function (response) {
      if (response.status === 204) {
        dispatch(removeTask(id));
      }
    })
    .catch(function (error) {
      console.log("Failed to delete task on the API: ", error);
    });
}
export const ThunkEditTask = (task: Task, access_token: string): AppThunk => async dispatch => {
  // const asyncResp = await exampleAPI()
  Axios.put('http://demo2.z-bit.ee/tasks/' + task.id, task, {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        dispatch(editTask(task));
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
export const ThunkGetTasks = (access_token: string): ThunkAction<Promise<boolean>, {}, {}, AppAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AppAction>): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      dispatch(Status(AsyncActionStatus.STARTED));
      console.log("Getting tasks")
      Axios.get<Task[]>('http://demo2.z-bit.ee/tasks', {
        headers: {
          'Authorization': 'Bearer ' + access_token
        }
      })
        .then((response: AxiosResponse<Task[]>) => {
          let tasks = response.data;
          console.log('Got tasks: ', tasks);
          dispatch(setTask(tasks));
          dispatch(Status(AsyncActionStatus.SUCCEEDED));
          resolve(true);
        })
        .catch(function (error) {
          console.log("failed to get the tasks: ", error);
          dispatch(Status(AsyncActionStatus.FAILED));
        })
    });
  }
}