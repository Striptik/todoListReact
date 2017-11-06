// @flow
import React, { Component } from 'react';
import type { ClockState, ClockProps } from './../flow-typed/def'

class Clock extends Component <ClockProps, ClockState> {
  intervalId: number;
  
  constructor(props: ClockProps) {
    super(props);
    
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: props.interval,
    };
  }
  
  
  componentWillMount () {
    this.intervalId = setInterval(() => {
      const newDate = new Date();
      this.setState({
        hours: newDate.getHours(),
        minutes: newDate.getMinutes(),
        seconds: newDate.getSeconds(),
      });
    }, this.props.interval)
  }
  
  
  shouldComponentUpdate(nextProps: Object, nextState: Object) {
    // console.log('shouldCompomentUpdate', nextState.date.toLocaleString());
    // if (this.state.needUpdate === true) {
    //   this.updateClock();
    //   return true
    // }
    return true;
  }

  componentWillUpdate(nextProps: Object, nextState: Object) {
    //Nothg..
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render () {

    const hours: string = this.state.hours <= 9 ? '0' + this.state.hours : '' + this.state.hours;
    const minutes: string = this.state.minutes <= 9 ? '0' + this.state.minutes : '' + this.state.minutes;
    const seconds: string = this.state.seconds <= 9 ? '0' + this.state.seconds : '' + this.state.seconds;
    
    return(
      <div>
        <h3 style={{
          color: 'red',
          fontSize: 30
        }}>
          {hours} : {minutes} : {seconds}
        </h3>
      </div>
    );
  }
}

export default Clock;