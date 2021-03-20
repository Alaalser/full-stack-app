import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import NavBar from './NavBar';

const App = () => (
  <Router>
    <Switch>
      <div className="App">
        <Route>
          <NavBar />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </div>
    </Switch>
  </Router>
);

export default App;
