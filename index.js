import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './src/components/NavBar/Header.js';
import Main from './src/components/Main/Main.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
