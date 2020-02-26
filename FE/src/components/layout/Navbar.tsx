import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers/rootReducer';

const Navbar: React.FC = () => {
  const loggedIn = useSelector((state: AppState) => state.auth.loggedIn);

  let Links: JSX.Element;
  if (loggedIn) {
    Links = <SignedInLinks></SignedInLinks>;
  }
  else {
    Links = <SignedOutLinks></SignedOutLinks>;
  }
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">Tasker</Link>
        {Links}
      </div>
    </nav>
  );
}

export default Navbar;