import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import Payment from './components/Payment/Payment/Payment';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/checkout">
        </Route>
        <Route path="/payment">
          <Payment></Payment>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;