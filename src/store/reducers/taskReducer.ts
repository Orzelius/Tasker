import {Task} from '../types/models';
import {TaskAction, ADD_TASK, REMOVE_TASK, EDIT_TASK, SET_TASK} from '../types/types';

const initState: Task[] = [
  {title: "Examaple Task" ,created_at: Date.now(), desc:"example description", id: "0", marked_as_done: false },
  {title: "Examaple Done Task" ,created_at: Date.now(), desc:"example description", id: "1", marked_as_done: true },
]

const taskReducer = (state = initState, action: TaskAction): Task[] => {
  switch(action.type){

    case(ADD_TASK):
      return [...state, action.task];

    case(REMOVE_TASK):
      return (state.filter(item => item.id !== action.id));

    case(EDIT_TASK):
      return state.map((item, index) => {
        if (state[index].id !== action.task.id) {
          // This isn't the item we care about - keep it as-is
          return item
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...action.task
        }
      })
    case(SET_TASK):
      return action.tasks;
    default:
      return state;
  }
}

export default taskReducer;