import React, { Fragment,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Timer from './pages/Timer';
import ViewProgress from './pages/ViewProgress';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
 return(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Project}/>
      <Route path="/timer" component={Timer}/>
      <Route path="/viewprogress" component={ViewProgress}/>
    </Switch>

  </BrowserRouter>
 );
}

export default App;
