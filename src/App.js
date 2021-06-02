import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstPage from './Pages/FirstPage/FirstPage';
import SecondPage from './Pages/SecondPage/SecondPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
        <FirstPage></FirstPage>
        </Route>
        <Route path="/home">
        <FirstPage></FirstPage>
        </Route>
        <Route path="/checkout">
          <SecondPage></SecondPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;