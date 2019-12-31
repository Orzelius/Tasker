import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dasboard from './components/dashboard/Dashboard';
import TaskDetails from './components/tasks/TaskDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* the Switch makes sure only the first element gets loaded */}
        <Switch>
          <Route exact path="/" component={Dasboard}/>
          <Route path='/task/:id' component={TaskDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
