import React, { Component } from 'react';
//import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import EnChSwitch from './EnChSwitch.js';


//--To DO List--//
//--Support English and Chinese Switch
//--Separate Welcome Page

//App is the main wrapper for all sub pages.
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isEnglish:false};
    this.onSwitchLang = this.onSwitchLang.bind(this);
  }
  onSwitchLang(){
    this.setState((preState)=>{return preState.isEnglish? {isEnglish:false}:{isEnglish:true}});

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
           {/*<img src={logo} className="App-logo" alt="logo" />*/}
          Emotion Studio

        </div>
        <EnChSwitch onClick={this.onSwitchLang} isEnglish={this.state.isEnglish}/>
        <div>
          {/*Pass props to childern*/}
          { React.Children.map(this.props.children,(child)=>React.cloneElement(child,{isEnglish:this.state.isEnglish})) }
        </div>
      </div>
    )
  }
}






export default App;
