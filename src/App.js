import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Timer from './pages/Timer';
import ViewProgress from './pages/ViewProgress';
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Leaderboard from './pages/Leaderboard'
import Register from './pages/Register'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  // By default, navbarhidden = false
  const [isNavBarHidden, setNavBarHidden] = useState(false)

  return (
    <div>
      <BrowserRouter>
      { (isNavBarHidden) ? null : <Navbar />}
        <Switch>
          <Route exact path="/" render={()=> <Login setNavBarHidden={setNavBarHidden}/>} />
          <Route path="/register" render={()=> <Register setNavBarHidden={setNavBarHidden}/>} />
          <Route path="/homepage" render={()=> <Homepage setNavBarHidden={setNavBarHidden}/>} />
          <Route path="/project" component={Project} />
          <Route path="/timer" component={Timer} />
          <Route path="/viewprogress" component={ViewProgress} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
