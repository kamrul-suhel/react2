import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {

    return (
      <div className="App">
          <h2>Reach Course: </h2>
          <Person name="Ian" age="35">He is a fullstack developer</Person>
          <Person name="Mike" age="34"/>
          <Person name="Hemm" age="28">Hemm is a full stack developer</Person>
      </div>
);
  }
}

export default App;
