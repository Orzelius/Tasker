import * as React from 'react';
import { RouteComponentProps} from 'react-router-dom';

type TParams =  { id: string };

function TaskDetails({match}: RouteComponentProps<TParams>){
  console.log(match);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
  <div className="card-content"><span className="card-title">Project title - k{match.params.id}</span></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam nihil modi beatae numquam. Corporis ipsum libero animi, deleniti dolorum id, quisquam distinctio magnam natus illo, temporibus esse earum voluptate!</p>
        <div className="card-action grey-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero non quae totam quam ut repudiandae dolorem? Reprehenderit eum minima eveniet assumenda perferendis, temporibus mollitia consequuntur earum nam. Recusandae, ipsam.</div>
      </div>
    </div>
  );
}

export default TaskDetails;