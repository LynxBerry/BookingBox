import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import coach from './chlv.png';

class SelectCoachPage extends Component {
  constructor(props){
      super(props);
      this.state={coaches:[]}; //list of coaches
      this.goToNextPage = this.goToNextPage.bind(this);
  }
  goToNextPage(){
      browserHistory.push('/selectdate');
  }

  goToPrePage(){
    browserHistory.push('/');
  }

  render(){
    return (
      <div>
        <div style={{marginLeft:"15px",marginTop:"-30px",marginBottom:"25px", width:"60px", color:"white"}} onClick={this.goToPrePage}>{"Back<<"}</div>
        <div ><h5>{"1 Select Your Coach"}</h5></div>
        <div className="lineSeparator" />
        <CoachList coaches={this.state.coaches} />
        <Button onClick={this.goToNextPage}>{"Next"}</Button>
      </div>
    );
  }

  componentDidMount(){
    var _this = this; //binding
    this.serverRequest = axios.get("http://localhost:4567/coaches").then(
//http://localhost:4567/session/xxxx
//http://codepen.io/jobs.json
      (res)=>{
        console.log(typeof res.data);
         _this.setState({coaches:res.data});

         });
  }

}


class CoachImage extends Component {
  render(){
    return (
      <div style={{float:"left",borderStyle:"solid",borderWidth:"1px",borderColor:"#dddddf", width:"80px", height:"80px", marginLeft:"18px", marginTop:"10px"}}> <img src={coach} /></div>
    );
  }

}

class CoachIntro extends Component {
  render(){
    return (
      <div style={{float:"left", width:"200px", marginLeft:"10px", marginTop:"10px"}}>
        <div className="lineSeparator" />
        <div>{this.props.bio} </div>
        <div className="lineSeparator" />
      </div>
    );
  }
}

class CoachEntry extends Component {
  render(){
    return (
      <div id="CoachList">
        <CoachImage />
        <CoachIntro bio={this.props.coach.bio}/>
      </div>
    )
  }
}

class CoachList extends Component {
  render(){
    return (
      <div style={{marginBottom:"20px"}}>
        {this.props.coaches.map((coach)=><CoachEntry key={coach.idCoach} coach={coach}/>)}
      </div>

    );
  }
}

export {SelectCoachPage};
