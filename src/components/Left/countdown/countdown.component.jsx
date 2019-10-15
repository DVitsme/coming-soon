import React, { Component } from 'react';
import moment from 'moment';

import styled from 'styled-components';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    // updated in componentDidMount
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // then is the time you count down from
      const then = moment('20191027', 'YYYYMMDD');
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const Time = styled.div`
      color: #fff;
      text-transform: uppercase;
      width: 90%;
      display: flex;
      justify-content: center;
      letter-spacing: 0.3em;
      span {
        padding: 0 20px;
        font-size: 12px;
        font-weight: 600;
        div {
          font-size: 40px;
        }
      }
    `;
    const Loading = styled.h1`
      color: #fff;
      text-transform: uppercase;
    `;
    const { days, seconds, minutes, hours } = this.state;
    return (
      <>
        {days === undefined ? (
          <Loading>Loading...</Loading>
        ) : (
          <Time>
            <span>
              <div id="days">{`${days}`}</div>
              days
            </span>
            <span>
              <div id="hours">{hours}</div>
              hours
            </span>
            <span>
              <div id="minutes">{minutes}</div>
              minutes
            </span>
            <span>
              <div id="seconds">{seconds}</div>
              seconds
            </span>
          </Time>
        )}
      </>
    );
  }
}
