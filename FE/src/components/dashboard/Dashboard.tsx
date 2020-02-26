import React from 'react';
import TaskList from '../tasks/TaskList'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers/rootReducer';
import CreateTaskFC from '../tasks/CreateTask';
import { Redirect } from 'react-router-dom';

const Dasboard: React.FC = () => {
  const state = useSelector((state: AppState) => state);

  if (!state.auth.loggedIn || !state.auth.user?.access_token) {
    return <Redirect to='/home' />
  }
  else {
    return (
      <div className="dasboard container">
        <div className="row">

          <div className="col s12 m6">
            <TaskList tasks={state.tasks}></TaskList>
          </div>

          <div className="col s12 m5 offset-m1">
            <CreateTaskFC access_token={state.auth.user?.access_token}></CreateTaskFC>
          </div>

        </div>
      </div>
    )
  }
}

export default Dasboard;