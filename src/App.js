import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Homescreen from './components/Homescreen';
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homescreen} />
          <Route path="/result" exact component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
