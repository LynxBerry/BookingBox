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

      </div>
    );
  }
}
class TimeTable extends Component {
    constructor(props){
        super(props);
        this.state = {selectedEntry:""};
        this.onSelectChange = this.onSelectChange.bind(this);
    }



    render() {
        return (
            <TimeEntry onSelect={this.onSelectChange} timeRange="9:00AM - 10:00AM" isSelected={"9:00AM - 10:00AM" === this.state.selectedEntry ? true:false}/>
            <TimeEntry onSelect={this.onSelectChange} timeRange="10:00AM - 11:00AM" isSelected={"10:00AM - 11:00AM" === this.state.selectedEntry ? true:false}/>
            <TimeEntry onSelect={this.onSelectChange} timeRange="11:00AM - 12:00AM" isSelected={"11:00AM - 12:00AM" === this.state.selectedEntry ? true:false}/>
            <TimeEntry onSelect={this.onSelectChange} timeRange="01:00PM - 02:00PM" isSelected={"01:00PM - 02:00PM" === this.state.selectedEntry ? true:false}/>
            <TimeEntry onSelect={this.onSelectChange} timeRange="02:00PM - 03:00PM" isSelected={"02:00PM - 03:00PM" === this.state.selectedEntry ? true:false}/>
            <TimeEntry onSelect={this.onSelectChange} timeRange="04:00PM - 05:00PM" isSelected={"04:00PM - 05:00PM" === this.state.selectedEntry ? true:false}/>
        );
    }

    onSelectChange(timeRange){
        this.setState({selectedEntry:timeRange});

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
    this.state = {timeRange: props.timeRange, isBooked: false, isSelected: props.isSelected };
    this.onClick = this.onClick.bind(this);

  }
  render() {
    return <div><TimeLabel timeRange={this.state.timeRange} />{this.state.isBooked ? "Booked":"Avaliable"} <button onClick={this.onClick} >Book</button></div>
  }

  onClick(){
      props.OnSelect(props.timeRange);

  }

  //book(){
 //    this.setState({isBooked: true});
  //}

  //unbook(){
//    this.setState({isBooked: false});
  //}
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
