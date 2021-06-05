import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Cart/Cart/Cart';

import Home from './components/Home/Home/Home';
import Payment from './components/Payment/Payment/Payment';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
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