import React from 'react';
import TaskSummary from './TaskSummary';
import { Task } from '../../store/types/models';

type props = {
  tasks: Task[]
}

const TaskList: React.FC<props> = ({ tasks }) => {

  const arrDone = tasks.map(task => {
    if (task.marked_as_done) {
      return (
        <TaskSummary key={task.id} task={task}/>
      )
    }
    return undefined;
  });

  const arrNotDone = tasks.map(task => {
    if (!task.marked_as_done) {
      return (
        <TaskSummary key={task.id} task={task}/>
      )
    }
    return undefined;
  });

  return (
    <div className="task-list section">
      {arrNotDone}
      <h4>Done tasks:</h4>
      {arrDone}
    </div>
  );
}

export default TaskList;