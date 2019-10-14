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
  const Middle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  `;
  return (
    <CountdownCol className="col">
      <Middle>
        <Time>
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
      </Middle>
    </CountdownCol>
  );
};

export default Countdown;
