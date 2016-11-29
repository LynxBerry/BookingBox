import React, { Component } from 'react';

class EnChSwitch extends Component {


  render(){
    return <div onClick={this.props.onClick} style={{width:"80px",marginRight:"0px", float:"right",marginTop:"-30px", color:"white"}}> {this.props.isEnglish?"中文":"English"}</div>

  }
}

export default EnChSwitch;
