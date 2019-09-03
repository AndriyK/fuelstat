import React from 'react';
import logo from './logo.svg';
//import './Appcss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewTransportPage from './pages/NewTransaportPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/new-transport" component={NewTransportPage} />
    </Switch>
  );
}

export default App;
