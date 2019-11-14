import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'My Website',
      navBar: ['Menú', 'A la carta', 'para picar', 'bebidas']
    }
  }

  render() {
    return (
      <div>
         <header>
            <h1>{this.state.title}</h1>
         </header>
         <nav>
            <ul>
               <li>{this.state.navBar[0]}</li>
               <li>{this.state.navBar[1]}</li>
               <li>{this.state.navBar[2]}</li>
               <li>{this.state.navBar[3]}</li>
            </ul>
         </nav>
      </div>
    )
  }
}