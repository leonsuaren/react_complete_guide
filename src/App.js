import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Pets from './Person/Pets';

class App extends Component {

  state = {
    persons: [
      { name: "Roberto", age: 41 },
      { name: "Leon", age: 40 },
      { name: "Nena", age: 19 }
    ],
    otherState: 'Some other Value',
    pets: [
      { type: "Leon", name: "Leon", origen: "Africa" },
      { type: "Dog", name: "Cachi", origen: "Tepito" },
      { type: "Cat", name: "Tom", origen: "Casa" }
    ],
    showPets: false,
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('What is clicked!!')
    // DON'T DO THIS: this.state.persons[0].name = "Beto";
    this.setState(
      {
        persons: [
          { name: "Beto", age: 41 },
          { name: "Leon", age: 41 },
          { name: "Nena", age: 19 }
        ]
      }
    )
  }

  switchInfoHandler = (newName) => {
    this.setState(
      {
        pets: [
          { type: "Tigre", name: newName, origen: "Africa" },
          { type: "Dog", name: "Tecate", origen: "casa" },
          { type: "Cat", name: "Tom", origen: "Casa" }
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        pets: [
          { type: "Tigre", name: "Tigre", origen: "Africa" },
          { type: "Dog", name: event.target.value, origen: "casa" },
          { type: "Cat", name: "Tom", origen: "Casa" }
        ]
      }
    )
  }

  togglePetsHandler = () => {
    const doesShowPets = this.state.showPets;
    this.setState({ showPets: !doesShowPets })
  }

  togglePersonsHandler = () => {
    const doesShowPerson = this.state.showPersons;
    this.setState( { showPersons: !doesShowPerson } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <button onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {
          this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            >My Hobbies: Parachute</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
        <h1>THIS IS A REACT TEST APP</h1>
        <button onClick={this.togglePetsHandler} >Toggle Pets</button>
        {this.state.showPets === true ?
          <div>
            <Pets
              type={this.state.pets[0].type}
              name={this.state.pets[0].name}
              origen={this.state.pets[0].origen} />
            <Pets
              type={this.state.pets[1].type}
              name={this.state.pets[1].name}
              origen={this.state.pets[1].origen}
              click={this.switchInfoHandler.bind(this, 'Leopardo')}
              change={this.nameChangedHandler}
            >And he was the best dog ever</Pets>
            <Pets
              type={this.state.pets[2].type}
              name={this.state.pets[2].name}
              origen={this.state.pets[2].origen} />
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}

export default App;
