import React from 'react';
import { Task } from '../../store/types/models';

type props = {task: Task}

function getDate(unix: number | undefined):string{
  if(!unix){
    return("undefined");
  }
  var date = new Date(unix*1000);
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

const TaskSummary: React.FC<props> = ({task}) => {
  return (
    <div className="card z-depth0 task-summary">
      <div className="card-content darken-3">
        <div className="right">
        <a href="./" className="delete-button right">
            <i className="material-icons">check</i>
          </a>
          <br/>
          <a href="./" className="delete-button right">
            <i className="material-icons">delete</i>
          </a>
          <br/>
          <a href="./" className="edit-button right">
            <i className="material-icons">edit</i>
          </a>
        </div>
        <span className="card-title"><b>{task.title}</b></span>
        <p className="grey-text">{getDate(task.created_at)}</p> <br />
        <p>{task.desc}</p>
      </div>
    </div>
  );
}

export default TaskSummary;