import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import { PrivateRoutes, LoggedOutRoutes } from './Routes';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <LoggedOutRoutes exact path="/login">
          <Login />
        </LoggedOutRoutes>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <PrivateRoutes>
          <Switch>
            <Route exact path="/:userId">
              <UserProfile exact path="/:userId" />
            </Route>
          </Switch>
        </PrivateRoutes>
        <Route>
          <h1>Error 404 Not Found !!</h1>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  </div>
);

export default App;
