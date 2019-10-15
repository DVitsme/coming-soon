import React, { Component } from 'react';

import { firestore } from '../../../firebase/firebase';
import styled from 'styled-components';

// Decouple the style from the component
// If you dont on every render, you generate a new input therefore loss of focus.
const NewsLetterInput = styled.input.attrs(props => ({
  type: 'email',
  name: 'email',
  placeholder: 'Enter Your Email'
}))`
  display: block;
  margin: 12px auto;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 14px 20px;
  border-radius: 30px;
  border: 1px solid #ddd;
  outline: none;
`;
const NewsletterBtn = styled.input.attrs(props => ({
  type: 'submit',
  value: 'Subscribe'
}))`
  background: linear-gradient(125deg, #3498db, #34495e);
  color: #fff;
  display: block;
  margin: 12px auto;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 14px 20px;
  border-radius: 30px;
  border: 1px solid #ddd;
  outline: none;

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
export default class AddSubscriber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      responseMessage: '',
      color: 'black'
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      createdAt: new Date()
    };
    firestore
      .collection('emails')
      .add(newUser)
      .then(() => {
        this.setState({
          email: '',
          responseMessage:
            'Thank you for Subscribing. We will contact you soon.',
          color: 'green'
        });
      })
      .catch(error => {
        // NEED TO ADD PROPER ERROR HANDLING
        this.setState({
          email: '',
          responseMessage:
            'Failed to save your info. Please refresh and try again',
          color: 'red'
        });
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NewsLetterInput
          value={this.state.email}
          onChange={this.handleChange}
        />
        <NewsletterBtn />
        <p style={{ color: `${this.state.color}` }}>
          {this.state.responseMessage}
        </p>
      </form>
    );
  }
}
