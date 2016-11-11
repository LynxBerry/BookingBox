import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Emotion Management</h2>
        </div>

<<<<<<< HEAD
        <Welcome userName={"Emotion Trainer & Management"}/>
        <TimeTable/>
=======
        {/*<Welcome userName={"Emotion Trainer & Management"}/>*/}
        <TimeTable />
        <Button>Hello World </Button>
>>>>>>> origin/master
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

class TimeTable extends Component {
  constructor(props){
    super(props);
    this.state = {selectedEntry:"xxx"};
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(timeRange){
    this.setState({selectedEntry:timeRange});
  }

  render(){
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} xsOffset={0} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="09:00AM - 10:00AM" selectedEntry={this.state.selectedEntry} isBooked={true}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0}  >
              <TimeEntry onSelect={this.onSelectChange} timeRange="10:00AM - 11:00AM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={2} xsOffset={5} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="11:00AM - 12:00AM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={2} xsOffset={5} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="01:00PM - 02:00PM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={2} xsOffset={5} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="02:00PM - 03:00PM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={2} xsOffset={5} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="04:00PM - 05:00PM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>

        </Grid>


      </div>
    )

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
<<<<<<< HEAD
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



=======
    this.state = {isSelected: false};
    this.onBook = this.onBook.bind(this);

  }

  componentWillReceiveProps(nextProps){ //This won't trigger another render
    this.setState({isSelected:this.props.timeRange === nextProps.selectedEntry?true:false});
  }

  render() {
    return <div className="Avail-Slot"><TimeLabel timeRange={this.props.timeRange} />{(this.props.isBooked ? "Booked":"Avaliable") + (this.state.isSelected? "Selected":"Unselected")} {this.props.isBooked?null:<button onClick={this.onBook}>Book Me</button>}</div>
  }

  onBook(){
    this.props.onSelect(this.props.timeRange);
    //console.log("==>");
    //console.log(this.props.selectedEntry);
    //console.log(this.props.timeRange);
    //console.log("<==")
    //this.setState({isSelected:this.props.timeRange === this.props.selectedEntry?true:false});

>>>>>>> origin/master
  }

  //book(){
 //    this.setState({isBooked: true});
  //}

  //unbook(){
//    this.setState({isBooked: false});
  //}
}

class TimeLabel extends Component {


  render() {
    return <div>{this.props.timeRange}</div>
  }
}




export default App;
