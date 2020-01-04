import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dasboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import TaskEdit from './components/tasks/TaskEdit';
import Home from './components/auth/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* the Switch makes sure only the first element gets loaded */}
        <Switch>
          <Route exact path="/" component={Dasboard}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/edit/:id' component={TaskEdit}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
