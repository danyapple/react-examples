import React from 'react';
import Header from './src/components/NavBar/Header.js';

export default class Carta extends React.Component {
  constructor() {
    super();
    this.state = {
      card_title: 'This is A la Carta page'
    }
  };

  render() {
    return (
      <div>
      <Header />
         <h2>{this.state.card_title}</h2>
      </div>
    )
  }
}