import React from 'react';
import './components/NavBar/Header.js';

export default class Snack extends React.Component {
  constructor() {
    super();
    this.state = {
      snack_title: 'This is para picar page'
    }
  };

  render() {
    return (
      <div>
         <Header />
         <h2>{this.state.snack_title}</h2>
      </div>
    )
  };
}