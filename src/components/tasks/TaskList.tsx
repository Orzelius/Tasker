import React from 'react';
import TaskSummary from './TaskSummary';
import { Task } from '../../store/types/models';

type props = {
  tasks: Task[]
}

const TaskList: React.FC<props> = ({tasks}) => {
  const taskSummaries = tasks && tasks.map(task => {
    return(
      <TaskSummary key={task.key} task={task}></TaskSummary>
    )
  });
  return(
    <div className="task-list section">
      {taskSummaries}
    </div>
  );
}

export default TaskList;