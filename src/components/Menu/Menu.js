import React from 'react';
import './components/NavBar/Header.js';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menu_title: 'This is menu page'
    }
  };

  render() {
    return(
      <div>
         <Header />
         <h2>{this.state.menu_title}</h2>
      </div>
    )
  };
}