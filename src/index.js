import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import * as serviceWorker from './serviceWorker';
import SnowStorm from 'react-snowstorm';
import Snowfall from 'react-snowfall'
ReactDOM.render(   
    <Router>
         <Snowfall  snowflakeCount={35}  style={{height:'100vh'}}/>
        <App />   
        <SnowStorm ludeMobile={true}  flakesMaxActive={70}/>
    </Router>,
  document.getElementById('root')
 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
