import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
   
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/checkout">
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;