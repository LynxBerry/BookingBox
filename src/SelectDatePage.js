import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {Button} from 'react-bootstrap';


class SelectDatePage extends Component {
    constructor(props){
        super(props);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    goToNextPage(){
        browserHistory.push('/timereserve');
    }

    goToPrePage(){
      browserHistory.push('/selectcoach');
    }
    render(){
        return (
                <div>
                    <div style={{marginLeft:"15px",marginTop:"-30px",marginBottom:"25px", width:"60px", color:"white"}} onClick={this.goToPrePage}>{"Back<<"}</div>
                    <div ><h5>{"2 Select availabe date"}</h5></div>
                    <div className="DateList" style={{marginBottom:"10px"}}>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                        <DateEntry year="2016" month="October" day="01" weekDay="Monday"/>
                    </div>
                    <div>
                    <Button onClick={this.goToNextPage}> {"Next"} </Button>
                    </div>
                </div>
        );
    }
}

class DateEntry extends Component {
    render(){
        return (
            <div className="DateEntry">
                <div>
                    <div className="month">{this.props.month}</div>
                    <div className="day">{this.props.day}</div>
                </div>
                <div>
                    <div className="weekday">{this.props.weekDay}</div>
                </div>
            </div>

        );
    }
}

export {SelectDatePage};
