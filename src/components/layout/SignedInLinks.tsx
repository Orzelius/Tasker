import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkLogout } from '../../store/actions/authActions';

function randRgba(): string{
  var o = Math.round, 
      r = Math.random, 
      s = 255;
      
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const SignedInLinks : React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ThunkLogout());
  }
  return(
    <ul className="right">
      <li><NavLink to='/' onClick={handleClick}>Log Out</NavLink></li>
      <li><Link to='/' className="btn btn-floating lighten-1" style={{backgroundColor: randRgba()}}><b>AK</b></Link></li>
    </ul>
  );
} 

export default SignedInLinks;