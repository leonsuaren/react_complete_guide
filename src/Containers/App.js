import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
`

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

    const style = {}

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} chancged={this.nameChangedHandler} />
        </div>
      )
      // style.backgroundColor = 'red';
      // style[":hover"] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p className={classes.join(' ')}>This is really woking!</p>
        <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonHandler} >Toggle Persons
            </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}


export default App;
