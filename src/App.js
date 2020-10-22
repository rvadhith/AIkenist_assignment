import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
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
