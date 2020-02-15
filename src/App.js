import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <Person name="Roberto" age="41" />
        <Person name="Leon" age="40">My Hobbies: Parachute</Person>
        <Person name="Nena" age="19"/>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}

export default App;
