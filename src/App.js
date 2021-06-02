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
   
        <Route path="/home">
        <FirstPage></FirstPage>
        </Route>
        <Route path="/checkout">
          <SecondPage></SecondPage>
        </Route>
        <Route path="/">
        <FirstPage></FirstPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;