import React, {useState} from 'react'
import { ThunkAddTask } from '../../store/actions/taskActions';
import { Task } from '../../store/types/models';
import { useDispatch } from 'react-redux';
import uuid from 'uuid';


const CreateTaskFC: React.FC = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    errorMsg: "",
    error: false
  });
  
  const dispact = useDispatch();
  
  const handleChange = (e: React.ChangeEvent<{ value: string, id: string}>) => {
    var newState = {...state};
    if(e.target.id === "title"){
      newState.title = e.target.value;
    }
    else{
      newState.description = e.target.value;
    }

    if(state.error && newState.title.length > 0){
      newState.error = false;
      newState.errorMsg = "";
    }
    setState(newState);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(state.title.length === 0){
      var newState = {...state};
      newState.errorMsg="A task has to have a title";
      newState.error = true;
      setState(newState);
      return;
    }
    var task: Task = {
      id: uuid(),
      title: state.title,
      desc: state.description
    }

    dispact(ThunkAddTask(task));
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-4">Create a task</h5>
        <br />
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="description">Description</label>
          <textarea className="materialize-textarea" id="description" onChange={handleChange} />
        </div>
        <p>{state.errorMsg}</p>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTaskFC;