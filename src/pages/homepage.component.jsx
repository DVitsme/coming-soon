import React, { Component } from 'react';
import styled from 'styled-components';
import Countdown from '../components/Left/countdown/countdown.component';
import Newsletter from '../components/Right/newsletter/newsletter.component';

export default class Homepage extends Component {
  render() {
    const Page = styled.div`
      background: #f1f1f1;
      display: flex;
      flex-wrap: wrap;
    `;
    return (
      <Page>
        <Countdown />
        <Newsletter />
      </Page>
    );
  }
}
