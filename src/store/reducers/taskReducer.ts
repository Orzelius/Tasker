import {Task} from '../types/models';
import {TaskAction} from '../types/types';

const initState: Task[] = [
  {title: "Examaple Task" ,created_at: Date.now(), desc:"example description", key: "0", marked_as_done: false },
]

const taskReducer = (state = initState, action: TaskAction): Task[] => {
  switch(action.type){
    case("ADD_TASK"):
      return [...state, action.task];
    default:
      return state;
  }
}

export default taskReducer;