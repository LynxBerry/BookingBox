import React, { Component } from 'react';
//import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';


//--To DO List--//
//--Support English and Chinese Switch
//--Separate Welcome Page

//App is the main wrapper for all sub pages.
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           {/*<img src={logo} className="App-logo" alt="logo" />*/}
          Emotion Studio
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}






export default App;
