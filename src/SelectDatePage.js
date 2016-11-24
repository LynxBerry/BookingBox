import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';


class SelectDatePage extends Component {
    constructor(props){
        super(props);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    goToNextPage(){
        browserHistory.push('/timereserve');
    }
    render(){
        return (
                <div>
                    <div className="DateList">
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
