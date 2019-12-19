import React from 'react';
import Notifications from './Notifications';
import TaskList from '../tasks/TaskList'
import {connect} from 'react-redux';
import { AppState } from '../../store/reducers/rootReducer';

class Dasboard extends React.Component<AppState>{
  render(){
    console.log(this.props.tasks)
    return(
      <div className="dasboard container">
        <div className="row">

          <div className="col s12 m6">
            <TaskList tasks={this.props.tasks}></TaskList>
          </div>

          <div className="col s12 m5 offset-m1">
            <Notifications></Notifications>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState, ownProps: AppState) => {
  return {
    auth: state.auth,
    tasks: state.tasks,
  } 
}

export default connect(mapStateToProps)(Dasboard);