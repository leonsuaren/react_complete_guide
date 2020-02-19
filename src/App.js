import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Pets from './Person/Pets';

class App extends Component {

  state = {
    persons: [
      { name : "Roberto", age : 41 },
      { name : "Leon", age : 40 },
      { name : "Nena", age : 19 }
    ],
    otherState : 'Some other Value',
    pets: [
      { type : "Leon", name: "Leon", origen: "Africa" },
      { type : "Dog", name: "Cachi", origen: "Tepito" },
      { type : "Cat", name: "Tom", origen: "Casa" }
    ]
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

  switchInfoHandler = () => {
    this.setState(
      {
        pets: [
          { type : "Tigre", name: "Tigre", origen: "Africa" },
          { type : "Dog", name: "Tecate", origen: "casa" },
          { type : "Cat", name: "Tom", origen: "Casa" }
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
        <h1>THIS IS A REACT TEST APP</h1>
        <button onClick = { this.switchInfoHandler }>Switch Information</button> 
        <Pets type = { this.state.pets[0].type } name = { this.state.pets[0].name } origen = { this.state.pets[0].origen } />
        <Pets type = { this.state.pets[1].type } name = { this.state.pets[1].name } origen = { this.state.pets[1].origen } />
        <Pets type = { this.state.pets[2].type } name = { this.state.pets[2].name } origen = { this.state.pets[2].origen } />
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}

export default App;
