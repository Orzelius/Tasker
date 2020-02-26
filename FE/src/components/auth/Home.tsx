import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container center">
      <h3>Welcome to tasker</h3>
      <h5>You should probably</h5>
      <span>
        <Link to='/signin' className="btn lighten-1"><b>sign in</b></Link>
        <h5>or</h5>
        <Link to='/signup' className="btn lighten-1"><b>sign up</b></Link>
      </span>
    </div>
  );
}

export default Home;
