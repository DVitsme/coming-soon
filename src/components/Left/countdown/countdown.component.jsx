import React from 'react';
import styled from 'styled-components';

import DcImage from '../../../static/images/WashingtonDC-Ansh-unsplash.jpg';

const Countdown = () => {
  const CountdownCol = styled.div`
    background: linear-gradient(
        to right bottom,
        rgba(0, 102, 135, 0.4),
        rgba(0, 102, 135, 0.4)
      ),
      url(${DcImage});
    background-position: center;
    background-size: cover;
  `;
  const Time = styled.div`
    color: #fff;
    text-transform: uppercase;
    width: 90%;
    display: flex;
    justify-content: center;
  `;
  return (
    <CountdownCol className="col">
      <Time className="middle">
        <span>
          <div id="days">12</div>
          days
        </span>
        <span>
          <div id="hours">06</div>
          hours
        </span>
        <span>
          <div id="minutes">35</div>
          minutes
        </span>
        <span>
          <div id="seconds">26</div>
          seconds
        </span>
      </Time>
    </CountdownCol>
  );
};

export default Countdown;
