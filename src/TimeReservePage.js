import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Button} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';
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
        )}) : null;
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

class TimeLabel extends Component { //Need to check if we have concise way to define component.
  render() {
    return <div>{this.props.timeRange}</div>
  }
}

export {TimeReservePage};
