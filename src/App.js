import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name : "Roberto", age : 41 },
      { name : "Leon", age : 40 },
      { name : "Nena", age : 19 }
    ],
    otherState : 'Some other Value'
  }

  switchNameHandler = () => {
    // console.log('What is clicked!!')
    // DON'T DO THIS: this.state.persons[0].name = "Beto";
    this.setState(
      {
        persons: [
          { name : "Beto", age : 41 },
          { name : "Leon", age : 41 },
          { name : "Nena", age : 19 }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <button onClick = { this.switchNameHandler } >Switch Name</button>
        <Person name= { this.state.persons[0].name } age= { this.state.persons[0].age } />
        <Person name= { this.state.persons[1].name } age= { this.state.persons[1].age } >My Hobbies: Parachute</Person>
        <Person name= { this.state.persons[2].name } age= { this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}

export default App;
