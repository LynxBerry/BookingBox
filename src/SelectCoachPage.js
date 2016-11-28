import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';
import './App.css';
import coach from './chlv.png';

class SelectCoachPage extends Component {
  constructor(props){
      super(props);
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
        <CoachList />
        <Button onClick={this.goToNextPage}>{"Next"}</Button>
      </div>
    );
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
        <div>"My name is James. I am a senior coach. My name is James. I am a senior coach. My name is James. I am a senior coach. My name is James. I am a senior coach." </div>
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
        <CoachIntro />
      </div>
    )
  }
}

class CoachList extends Component {
  render(){
    return (
      <div style={{marginBottom:"20px"}}>
        <CoachEntry />
        <CoachEntry />
        <CoachEntry />
        <CoachEntry />
      </div>

    );
  }
}

export {SelectCoachPage};
