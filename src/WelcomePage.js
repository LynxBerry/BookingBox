import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button} from 'react-bootstrap';
//To do:
// * uses ajax to fetch data
// * Support Bi-language switch (English & Chinese)

var welcomeMsgs = {
    welcomeTitle:["Welcome #user to Emotion Studio", "欢迎 #user to Emotion Studio"],
    ruleTitle:["Terms of Booking",
               "预约须知"],

    rule1:["*The order cannot be changed after completion. Cancelling order will lead to partly refund. The detailed rules are as below:",
           "*预约成功后订单不可更改，如需取消将产生订金损失，退款规则如下:"],

    rule1_1:["99% of deposite will get refunded if the order is cancelled 72 hours prior to the booking time.",
             "距培训时间72小时以上取消订单，退99%订金"],

    rule1_2:["50% of deposite will get refunded if the order is cancelled between 48 and 72 hours prior to the booking time.",
             "距培训时间48-72小时取消订单，退50%订金"],

    rule1_3:["No refund of deposite if the order is cancelled less than 48 hours prior to the booking time.",
             "距培训时间不足48小时取消订单，不可退订金"],

    bookingStepsTitle:["Booking Steps","预定步骤"],
    bookingSteps:["1 Select coach 2 Select Date 3 Select Time 4 Pay the deposite","1 选择教练 2 选择档期 3 选择时间 4 支付订金"]

}


class WelcomeInfo extends Component {
  constructor(props){
    super(props);
    //this.props.isEnglish
  }

  render() {
    console.log("abc");
    console.log(welcomeMsgs);
    return (
      <div>
        <div style={{textAlign:"left",marginLeft:"20px"}}><h5> {this.props.isEnglish? welcomeMsgs.ruleTitle[0]:welcomeMsgs.ruleTitle[1]}</h5></div>
        <div style={{textAlign:"left", marginLeft:"30px", marginBottom:"5px", marginRight:"30px"}}> {this.props.isEnglish? welcomeMsgs.rule1[0]:welcomeMsgs.rule1[1]} </div>
        <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}> {this.props.isEnglish? welcomeMsgs.rule1_1[0]:welcomeMsgs.rule1_1[1]} </div>
        <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}> {this.props.isEnglish? welcomeMsgs.rule1_2[0]:welcomeMsgs.rule1_2[1]} </div>
        <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}> {this.props.isEnglish? welcomeMsgs.rule1_3[0]:welcomeMsgs.rule1_3[1]} </div>

      </div>
    );
  }
}

class WelcomeTitle extends Component { //Welcome Who?
  render() {
    return <div><h5>{(this.props.isEnglish? welcomeMsgs.welcomeTitle[0]:welcomeMsgs.welcomeTitle[1]).replace("#user",this.props.userName)} </h5></div>;
  };
}

class WelcomeStepInfo extends Component {
  render() {
    return (
        <div>
            <div style={{textAlign:"left",marginLeft:"20px"}}><h5>{this.props.isEnglish?welcomeMsgs.bookingStepsTitle[0]:welcomeMsgs.bookingStepsTitle[1]}</h5></div>
            <div style={{textAlign:"left", marginLeft:"34px", marginRight:"30px"}}>{this.props.isEnglish?welcomeMsgs.bookingSteps[0]:welcomeMsgs.bookingSteps[1]}</div>
        </div>
    );
  }
}

class WelcomePage extends Component {
    constructor(props){
        super(props);
        //this.state = {isEnglish:true};
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    //--To DO: Change it to /SelectCoach
    goToNextPage(){
        browserHistory.push('/selectcoach');
    }

  render() {
    return (
      <div>
        <WelcomeTitle userName="James Chen" isEnglish={this.props.isEnglish} />
        <div className="lineSeparator" />
        <WelcomeInfo isEnglish={this.props.isEnglish} />
        <div className="lineSeparator" />
        <WelcomeStepInfo isEnglish={this.props.isEnglish} />

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
