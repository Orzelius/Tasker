import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkLogout } from '../../store/actions/authActions';
import { AppState } from '../../store/reducers/rootReducer';

function randRgba(): string{
  var o = Math.round, 
      r = Math.random, 
      s = 255;
      
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const SignedInLinks : React.FC = () => {
  const user = useSelector((state: AppState) => state.auth.user);
  let initals = "";
  if(user && user.firstname && user.lastname){
    initals = user.firstname.toUpperCase()[0] + user.lastname.toUpperCase()[0];
    console.log("initals: ", initals);
  }
  else if(user && user.firstname){
    initals = user.firstname.toUpperCase()[0] + user.firstname.toUpperCase()[1];
  }
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ThunkLogout());
  }
  return(
    <ul className="right">
      <li><NavLink to='/' onClick={handleClick}>Log Out</NavLink></li>
  <li><Link to='/' className="btn btn-floating lighten-1" style={{backgroundColor: randRgba()}}><b>{initals}</b></Link></li>
    </ul>
  );
} 

export default SignedInLinks;