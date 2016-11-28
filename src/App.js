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
        <div style={{textAlign:"left",marginLeft:"20px"}}> <h5>{"Terms of Booking"}</h5></div>
        <div style={{textAlign:"left", marginLeft:"30px", marginBottom:"5px", marginRight:"30px"}}> {"*预约成功后订单不可更改，如需取消将产生订金损失，退款规则如下："} </div>
        <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}> {"距培训时间72小时以上取消订单，退99%订金"} </div>
        <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}> {"距培训时间48-72小时取消订单，退50%订金"} </div>
        <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}> {"距培训时间不足48小时取消订单，不可退订金"} </div>

      </div>
    )
  }
}

class WelcomeTitle extends Component { //Welcome Who?
  render() {
    return <div><h5>{"Welcome " + this.props.userName +" to Emotion Studio"}</h5></div>;
  }
}

class WelcomeStepInfo extends Component {
  render() {
    return (
        <div>
            <div style={{textAlign:"left",marginLeft:"20px"}}><h5>{"Booking Steps"}</h5></div>
            <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}>{"1 Select coach 2 Select Date 3 Select Time 4 Pay the deposite"}</div>
        </div>
    )
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
        <WelcomeTitle userName="James Chen"/>
        <div className="lineSeparator" />
        <WelcomeInfo />
        <div className="lineSeparator" />
        <WelcomeStepInfo />

        <div>

          <Button onClick={this.goToNextPage} style={{width:"120px",margin:"10px"}}>{"Start Booking"}</Button>
        </div>
        <div>
          <Button style={{width:"120px"}} >{"My Bookings"}</Button>
        </div>
      </div>

    );
  }
}


class TimeTable extends Component {
  constructor(props){
    super(props);
    this.state = {selectedEntry:"Empty Time Entry"};
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(timeRange){ // will be invoked when a different Time Entry is selected.
    this.setState({selectedEntry:timeRange});

  }

  render(){
    var listTimeEntries = this.state.listTimeEntries? this.state.listTimeEntries.map((t)=>{ return  (
            <Row key={t.timeSlotId}>
              <Col xs={12} xsOffset={0}>
                <TimeEntry onSelect={this.onSelectChange} timeRange={t.timeRange} selectedEntry={this.state.selectedEntry} isBooked={t.isBooked}/>
              </Col>
            </Row>
        );}) : null;
    return (
      <div>
        <Grid>
            {listTimeEntries}
        </Grid>


      </div>
    )

  }
  componentDidMount() {
      //load time slot information
      let listTimeEntries = [
          {
              timeSlotId:101,
              timeRange:"09:00AM - 10:00AM",
              isBooked:false
          },
          {
              timeSlotId:102,
              timeRange:"10:00AM - 11:00AM",
              isBooked:false
          },
          {
              timeSlotId:103,
              timeRange:"11:00AM - 12:00PM",
              isBooked:true
          },
          {
              timeSlotId:104,
              timeRange:"01:00PM - 02:00PM",
              isBooked:false
          },
          {
              timeSlotId:105,
              timeRange:"02:00PM - 03:00PM",
              isBooked:false
          },
          {
              timeSlotId:106,
              timeRange:"03:00PM - 04:00PM",
              isBooked:false
          },
          {
              timeSlotId:107,
              timeRange:"04:00PM - 05:00PM",
              isBooked:false
          }
      ];
      this.setState({listTimeEntries});
  }


}

class Welcome extends Component {
  render() {
    return <div><h1>{"Welcome to "+ this.props.userName }</h1></div>
  }
}

class TimeEntry extends Component {

  constructor(props){
    super(props);
    this.state = {isSelected: false};
    this.onSelect = this.onSelect.bind(this);

  }

  componentWillReceiveProps(nextProps){ //This won't trigger another render
    this.setState({isSelected:this.props.timeRange === nextProps.selectedEntry?true:false});
  }

  render() {
    var indicator = this.state.isSelected ? {float:'left', paddingLeft:'5px',paddingTop:'3px'}:{float:'left', paddingLeft:'5px',paddingTop:'5px',color:'white'};
    return (
        <div className={this.props.isBooked? "Unavail-Slot":"Avail-Slot"}>

                <div style={indicator}>{"*"}</div>

                <div onClick={this.props.isBooked?null:this.onSelect}><TimeLabel timeRange={this.props.timeRange} /> </div>

        </div>
    )

  }

  onSelect(){
    this.props.onSelect(this.props.timeRange); // report to TimeTable via calling TimeTable's method.
  }


}

class TimeLabel extends Component {


  render() {
    return <div>{this.props.timeRange}</div>
  }
}





export default App;
export {WelcomePage, TimeReservePage};
