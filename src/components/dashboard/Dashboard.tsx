import React from 'react';
import TaskList from '../tasks/TaskList'
import { useSelector} from 'react-redux'
import { AppState } from '../../store/reducers/rootReducer';
import CreateTaskFC from '../tasks/CreateTask';

const Dasboard: React.FC = () => {
  const tasks = useSelector((state: AppState) => state.tasks);
  return (
    <div className="dasboard container">
      <div className="row">

        <div className="col s12 m6">
          <TaskList tasks={tasks}></TaskList>
        </div>

        <div className="col s12 m5 offset-m1">
          <CreateTaskFC></CreateTaskFC>
        </div>

      </div>
    </div>
  )
}

export default Dasboard;