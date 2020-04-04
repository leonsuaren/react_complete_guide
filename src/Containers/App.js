import React, { Component } from 'react';
import Persons from './../Components/Persons/Persons';
import Cockpit from './../Components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: "uinnsu", name: "Roberto", age: 41 },
      { id: "nusnai", name: "Leon", age: 40 },
      { id: "qbaysb", name: "Nena", age: 19 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  deletePersonHandler = (personsIndex) => {
    // const persons = this.state.persons.slice(); esto es lo mismo que el codigo de la siguiente linea
    const persons = [...this.state.persons]
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex]) es lo mismo que las lineas de codigo de arriba

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} chancged={this.nameChangedHandler} />
      )
    }

    return (
      <div className="App">
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}


export default App;
