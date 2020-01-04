import React, { useState } from 'react';
import { User, AsyncActionStatus } from '../../store/types/models';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkRegister } from '../../store/actions/authActions';
import { AppState } from '../../store/reducers/rootReducer';
import { Redirect } from 'react-router-dom';

const SignUp: React.FC = () => {
  let initState = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }
  const [state, setState] = useState(initState);
  const dispatch = useDispatch();

  const loginStatus = useSelector((state: AppState) => state.auth.status);
  if(loginStatus === AsyncActionStatus.SUCCEEDED){
    return <Redirect to='/'/>
  }

  const handleChange = (e: React.ChangeEvent<{ value: string, id: string}>) => {
    let newState = {...state};
    switch(e.target.id){
      case("email"):
        newState.email  = e.target.value;
        break;
      case("password"):
        newState.password  = e.target.value;
        break;
      case("lastName"):
        newState.lastname  = e.target.value;
        break;
      case("firstName"):
        newState.firstname  = e.target.value; 
        break;
    }
    setState(newState);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    const user: User = {
      username: state.firstname,
      access_token: '',
      created_at: '',
      firstname: state.firstname,
      id: '',
      lastname: state.lastname,
      session: ''
    }
    dispatch(ThunkRegister(user, state.password));
  }
  return (
    <div className="container">
      <form className="white grey-text" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-4">Sign up </h5>
        <br />
        <div className="row">
          <div className="input-field col m6">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" onChange={handleChange} />
          </div>
          <div className="input-field col m6">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={handleChange} />
          </div>
        </div>
        <div className="row">

          <div className="input-field col s12">
            <input type="password" id="password" onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <span className="red-text texr-darken-2">Passwords are unencrypted, don't use a real one</span>
          </div>
        </div>

        <div className="input-field col s12">
          <button className="btn pink lighten-1">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;