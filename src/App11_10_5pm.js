import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Emotion Management</h2>
        </div>

        <Welcome userName={"Emotion Trainer & Management"}/>
        <TimeEntry timeRange="9:00AM - 10:00AM"/>
        <TimeEntry timeRange="10:00AM - 11:00AM"/>
        <TimeEntry timeRange="11:00AM - 12:00AM"/>
        <TimeEntry timeRange="01:00PM - 02:00PM"/>
        <TimeEntry timeRange="02:00PM - 03:00PM"/>
        <TimeEntry timeRange="04:00PM - 05:00PM"/>
      </div>
    );
  }
}

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {userName: props.userName};
  }
  render() {
    return <div><h1>{"Welcome to "+ this.state.userName }</h1></div>
  }
}

class TimeEntry extends Component {

  constructor(props){
    super(props);
    this.state = {timeRange: props.timeRange, isBooked: false};
    this.book = this.book.bind(this);
    this.unbook = this.unbook.bind(this);
    this.onClick = this.onClick.bind(this);

  }
  render() {
    return <div><TimeLabel timeRange={this.state.timeRange} />{this.state.isBooked ? "Booked":"Avaliable"} <button onClick={this.onClick}>Book</button></div>
  }

  onClick(){
    this.state.isBooked? this.unbook():this.book();

  }

  book(){
    this.setState({isBooked: true});
  }

  unbook(){
    this.setState({isBooked: false});
  }
}

class TimeLabel extends Component {
  constructor(props){
    super(props);
    this.state = {timeRange: props.timeRange};
  }

  render() {
    return <div>{this.state.timeRange}</div>
  }
}




export default App;
