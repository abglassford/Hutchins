import React, { Component } from 'react';
import '../css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{this.props.children}</div>
      </div>
    );
  }
}
