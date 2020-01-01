import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

const Navbar : React.FC = () => {
  return(
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">Tasker</Link>
        <SignedInLinks></SignedInLinks>
        {/* <SignedOutLinks></SignedOutLinks> */}
      </div>
    </nav>
  );
} 

export default Navbar;