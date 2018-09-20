import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    function getName(name = 'name'){
      return name.toUpperCase();
    }

    return (
      <div className="App">
          <h2>Reach training {getName()}</h2>
      </div>
);
  }
}

export default App;
