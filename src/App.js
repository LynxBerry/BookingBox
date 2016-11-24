import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
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
          Emotion Studio
        </div>

        <div>
          {this.props.children}
        </div>



      </div>
    );
  }
}

// This is for time reserve page.
class TimeReservePage extends Component {
  render() {
      return (
        <div>
          <div>{"Time Reserve"}</div>
          <TimeTable />
          <Button>Next</Button>
        </div>
      )
  }

}

class WelcomeInfo extends Component {
  render() {
    return (
      <div>
        <div> {"预约项目说明"} </div>
        <div> {"预约成功后订单不可更改，如需取消将产生订金损失，退款规则如下："} </div>
        <div> {"距培训时间72小时以上取消订单，退99%订金"} </div>
        <div> {"距培训时间48-72小时取消订单，退50%订金"} </div>
        <div> {"距培训时间不足48小时取消订单，不可退订金"} </div>

      </div>
    )
  }
}

class WelcomeTitle extends Component {
  render() {
    return <div>{"Welcome Mr. Steven"}</div>;
  }
}

class WelcomeStepInfo extends Component {
  render() {
    return <div>{"Steps: 1. Select coach; 2. Select Date; 3. Select Time; 4. Pay the deposite."}</div>;
  }
}

class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    goToNextPage(){
        browserHistory.push('/selectdate');
    }


  render() {
    return (
      <div>
        <WelcomeTitle />
        <WelcomeInfo />
        <WelcomeStepInfo />
        <div>
          {/*this is not good.*/}
          <Button onClick={this.goToNextPage}>{"开始预约"}</Button>
        </div>
        <div>
          <Button>{"我的预约"}</Button>
        </div>
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
            <Col xs={12} xsOffset={0} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="11:00AM - 12:00AM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="01:00PM - 02:00PM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} >
              <TimeEntry onSelect={this.onSelectChange} timeRange="02:00PM - 03:00PM" selectedEntry={this.state.selectedEntry}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} >
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
    this.state = {isSelected: false};
    this.onBook = this.onBook.bind(this);

  }

  componentWillReceiveProps(nextProps){ //This won't trigger another render
    this.setState({isSelected:this.props.timeRange === nextProps.selectedEntry?true:false});
  }

  render() {
    var indicator = this.state.isSelected ? {float:'left', paddingLeft:'5px',paddingTop:'3px'}:{float:'left', paddingLeft:'5px',paddingTop:'5px',color:'white'};
    return (
        <div className={this.props.isBooked? "Unavail-Slot":"Avail-Slot"}>

                <div style={indicator}>{"*"}</div>


                <div onClick={this.props.isBooked?null:this.onBook}><TimeLabel timeRange={this.props.timeRange} /> </div>

        </div>
    )

  }

  onBook(){
    this.props.onSelect(this.props.timeRange);
    //console.log("==>");
    //console.log(this.props.selectedEntry);
    //console.log(this.props.timeRange);
    //console.log("<==")
    //this.setState({isSelected:this.props.timeRange === this.props.selectedEntry?true:false});


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
export {WelcomePage, TimeReservePage};
