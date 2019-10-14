import React, { Component } from 'react';
import styled from 'styled-components';

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
    return (
      <NewsletterCol className="col">
        <div className="newsletter middle">
          <h2>Valentine Consulting is coming soon</h2>
          <h4>Subscribe to get a notification when we launch</h4>
          <form action="">
            <input type="text" placeholder="Enter Your Email" />
            <input type="button" className="newsletter-btn" value="Subscribe" />
          </form>
        </div>
      </NewsletterCol>
    );
  }
}
