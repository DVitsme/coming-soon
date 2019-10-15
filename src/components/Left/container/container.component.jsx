import React from 'react';
import styled from 'styled-components';

import Countdown from '../countdown/countdown.component';

import DcImage from '../../../static/images/WashingtonDC-Ansh-unsplash.jpg';

const Container = () => {
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
        <Countdown />
      </Middle>
    </CountdownCol>
  );
};

export default Container;
