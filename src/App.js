import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstPage from './Pages/FirstPage/FirstPage';

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
      </Switch>
    </Router>
  );
};

export default App;