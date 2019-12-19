import {Task} from '../types/models';
import {TaskAction} from '../types/actions';

const initState: Task[] = [
  {title: "Task 1",created_at: Date.now(), desc:"add da sdsad das dasda sd", id: "0", marked_as_done: false },
  {title: "Bring eggs",created_at: Date.now(), desc:"add da sdsad das dasda sd", id: "1", marked_as_done: false },
  {title: "Test data",created_at: Date.now(), desc:"add da sdsad das dasda sd", id: "2", marked_as_done: false },
  {title: "TYayyy",created_at: Date.now(), desc:"add da sdsad das dasda sd", id: "3", marked_as_done: false },
]

const taskReducer = (state = initState, action: TaskAction): Task[] => {
  return state;
}

export default taskReducer;