/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { RouteComponentProps, useHistory, Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/reducers/rootReducer';
import { Task } from '../../store/types/models';
import { ThunkEditTask } from '../../store/actions/taskActions';

type TParams = { id: string };

function TaskEdit({ match }: RouteComponentProps<TParams>) {
  let task = useSelector((state: AppState) => state.tasks).find(x => x.id.toString() === match.params.id);
  let access_token = useSelector((state: AppState) => state.auth.user?.access_token);

  const [state, setState] = React.useState({task: {title: task?.title, desc: task?.desc, marked_as_done: false, id: task?.id}, error: false, errorMsg: ""});
  const history = useHistory();
  const dispact = useDispatch();
    
  if(!access_token){
    return(
      <Redirect to='/'/>
    );
  }
  if(!task){
    return(
      <div className="container">
        <h5>This task was not found</h5>
      </div>
    )
  }


  const handleChange = (e: React.ChangeEvent<{ value: string, id: string}>) => {
    var newState = {...state};
    if(newState.task){
      if(e.target.id === "title"){
        newState.task.title = e.target.value;
      }
      else{
        newState.task.desc = e.target.value;
      }
      if(state.error && newState.task.title && newState.task.title.length > 0){
        newState.error = false;
        newState.errorMsg = "";
      }
    }
    setState(newState);
  }

  const handleBullet = (e: React.FormEvent<HTMLInputElement>) => {
    var newState = {...state};
    if(newState.task){
      newState.task.marked_as_done = !newState.task.marked_as_done;
      console.log("Done: ", newState.task.marked_as_done)
    }
    setState(newState);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(state.task && state.task.id && state.task.desc && access_token){
      if(!state.task.title){
        var newState = {...state};
        newState.errorMsg="A task has to have a title";
        newState.error = true;
        setState(newState);
        return;
      }
      let task: Task = {
        id: state.task.id,
        title: state.task.title,
        desc: state.task.desc,
        marked_as_done: state.task.marked_as_done
      }

      dispact(ThunkEditTask(task, access_token));
      history.push("/");
    }
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <br />
        <h4 className="grey-text text-darken-4">Edit task</h4>
        <br />
        <div className="input-field">
          <h5>Title</h5>
          <input type="text" defaultValue={task?.title} id="title" onChange={handleChange}/>
          <p>{state.errorMsg}</p>
        </div>
        <div className="input-field">
          <h5>Description</h5>
          <input type="text" defaultValue={task?.desc} id="description" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio" onChange={handleBullet} defaultChecked={!task?.marked_as_done} />
              <span>In progress</span>
            </label>
            <label className="checkbox">
              <input className="with-gap" name="group1" type="radio" onChange={handleBullet} defaultChecked={task?.marked_as_done} />
              <span>Complete</span>
            </label>
          </p>
        </div>
        <div className="input-field">
          <br/>
          <Link to="/" style={{marginRight:"1em"}}>
          <button type="submit" className="btn grey lighten-1">Cancel</button>
          </Link>
          <button type="reset" className="btn grey lighten-1">Reset</button>
          <button type="submit" className="btn pink lighten-1 right">Save</button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;