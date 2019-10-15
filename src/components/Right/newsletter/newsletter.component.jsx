import React, { Component } from 'react';
import styled from 'styled-components';
import AddSubscriber from '../addSubscriber/addSubscriber.component';

export default class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0
    };
  }
  render() {
    const NewsletterCol = styled.div`
      background: #fff;
    `;
    const Middle = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    `;
    const NewsletterContainer = styled.div`
      width: 90%;
      h4 {
        font-style: italic;
        font-size: 12ppx;
      }
    `;

    return (
      <NewsletterCol className="col">
        <Middle>
          <NewsletterContainer>
            <h2>Valentine Consulting is coming soon</h2>
            <h4>Subscribe to get a notification when we launch</h4>
            <AddSubscriber />
          </NewsletterContainer>
        </Middle>
      </NewsletterCol>
    );
  }
}
