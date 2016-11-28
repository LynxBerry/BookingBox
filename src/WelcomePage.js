import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button} from 'react-bootstrap';

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
    );
  }
}

class WelcomeTitle extends Component { //Welcome Who?
  render() {
    return <div><h5>{"Welcome " + this.props.userName +" to Emotion Studio"}</h5></div>;
  };
}

class WelcomeStepInfo extends Component {
  render() {
    return (
        <div>
            <div style={{textAlign:"left",marginLeft:"20px"}}><h5>{"Booking Steps"}</h5></div>
            <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}>{"1 Select coach 2 Select Date 3 Select Time 4 Pay the deposite"}</div>
        </div>
    );
  }
}

class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    //--To DO: Change it to /SelectCoach
    goToNextPage(){
        browserHistory.push('/selectcoach');
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

export {WelcomePage};
