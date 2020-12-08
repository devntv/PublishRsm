import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import * as serviceWorker from './serviceWorker';
import SnowStorm from 'react-snowstorm';
import Snowfall from 'react-snowfall'
ReactDOM.render(
  // <React.StrictMode>
    <Router>
        <App />
       
          <Snowfall snowflakeCount={35}/>
       
        <SnowStorm ludeMobile={true}  flakesMaxActive={70}/>
    </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
