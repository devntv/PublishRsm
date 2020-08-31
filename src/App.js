import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components';
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Alone from "./components/Alone"
import Contact from "./components/Contact"
function App() {
  return (
    <Router>
    <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/my-resume" component={Resume}/>
      <Route path="/my-target" component={Portfolio}/>
      <Route path="/contacts" component={Contact}/>
      <Route path="/I-troduce" component={Alone}/> 
      </Router>
  );
}

export default App;
