/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Task } from '../../store/types/models';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkRemoveTask, ThunkEditTask } from '../../store/actions/taskActions';
import { Link, Redirect } from 'react-router-dom';
import { AppState } from '../../store/reducers/rootReducer';

type props = { task: Task }

function getDate(unix: number | undefined): string {
  if (!unix) {
    return ("undefined");
  }
  var date = new Date(unix);
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

const TaskSummary: React.FC<props> = ({ task }) => {
  const dispatch = useDispatch();
  const access_token = useSelector((state: AppState) => (state.auth.user?.access_token));

  if(!access_token){
    return(
      <Redirect to="/home"/>
    );
  }

  const handleDelete = () => {
    dispatch(ThunkRemoveTask(task.id, access_token));
  }
  const handleMark = () => {
    let newTask = { ...task };
    newTask.marked_as_done = !newTask.marked_as_done;
    dispatch(ThunkEditTask(newTask, access_token))
  }

  let taskJsx: JSX.Element;
  if (task.marked_as_done) {
    taskJsx = (
      <div className="card z-depth0 task-summary">
        <div className="card-content darken-3">
          <div className="right">
            <a className="check button btn-flat right">
              <i className="material-icons" onClick={handleMark}>brush</i>
            </a>
            <br />
            <a className="delete  btn-flat button right" onClick={handleDelete}>
              <i className="material-icons">delete</i>
            </a>
          </div>
          <span className={"card-title grey-text done-" + task.marked_as_done}><b>{task.title}</b></span>
          <p className="grey-text">{getDate(task.created_at)}</p>
        </div>
      </div>
    )
  }
  else {
    taskJsx = (
      <div className="card z-depth0 task-summary">
        <div className="card-content darken-3">
          <div className="right button-wrapper">
            <div className="align-wrapper">
              <a className="check button btn-flat right">
                <i className="material-icons" onClick={handleMark}>check</i>
              </a>
              <br />
              <Link to={"/edit/" + task.id} className="edit button btn-flat right">
                <i className="material-icons">edit</i>
              </Link>
              <br />
              <a className="delete button btn-flat right" onClick={handleDelete}>
                <i className="material-icons">delete</i>
              </a>
            </div>
          </div>
          <span className="card-title"><b>{task.title}</b></span>
          <p className="grey-text">{getDate(task.created_at)}</p> <br />
          <p>{task.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {taskJsx}
    </div>
  )
}

export default TaskSummary;