import React from 'react';
import './components/NavBar/Header.js';

export default class Drinks extends React.Component {
  constructor() {
    super();
    this.state = {
      drink_title: 'This is bebidas page'
    }
  };

  render() {
    return (
      <div>
         <Header />
         <h2>{this.state.drink_title}</h2>
      </div>
    )
  }
}