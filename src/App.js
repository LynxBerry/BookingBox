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
        <TimeTable/>
      </div>
    );
  }
}
class TimeTable extends Component {
    constructor(props){
        super(props);
        this.state = {selectedEntry:"xxx"};
        this.onSelectChange = this.onSelectChange.bind(this);
    }





    onSelectChange(timeRange){
        console.log("timeRange"+ timeRange);
        console.log("selectedEntry"+this.state.selectedEntry);
        console.log("10:00AM - 11:00AM" === this.state.selectedEntry ? true:false);
        this.setState({selectedEntry:timeRange});
        console.log("rabit");

    }
    render() {
        console.log("render");
        return (
            <div>
            <TimeEntry onSelect={this.onSelectChange} timeRange="9:00AM - 10:00AM" selectedEntry={this.state.selectedEntry} />
            <TimeEntry onSelect={this.onSelectChange} timeRange="10:00AM - 11:00AM" selectedEntry={this.state.selectedEntry} />
            <TimeEntry onSelect={this.onSelectChange} timeRange="11:00AM - 12:00AM" selectedEntry={this.state.selectedEntry} />
            <TimeEntry onSelect={this.onSelectChange} timeRange="01:00PM - 02:00PM" selectedEntry={this.state.selectedEntry} />
            <TimeEntry onSelect={this.onSelectChange} timeRange="02:00PM - 03:00PM" selectedEntry={this.state.selectedEntry} />
            <TimeEntry onSelect={this.onSelectChange} timeRange="04:00PM - 05:00PM" selectedEntry={this.state.selectedEntry} />
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
    this.state = {timeRange: props.timeRange, isBooked: false, OnSelect:props.OnSelect };
    this.onClick = this.onClick.bind(this);
    console.log("isSelected" + props.isSelected);

  }
  render() {
    console.log("renderinner");
    return <div><TimeLabel timeRange={this.state.timeRange} />{(this.state.isBooked ? "Booked":"Avaliable")+ (this.props.timeRange === this.props.selectedEntry?"selected":"unselected")} <button onClick={this.onClick} >Book</button></div>
  }

  onClick(e){
      console.log(this.state.timeRange);
      this.props.onSelect(this.state.timeRange);



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
