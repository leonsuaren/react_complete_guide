import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
      // style.backgroundColor = 'red';
      // style[":hover"] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className="App">
          <h1>Hi!! I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really woking!</p>
          <button className={classes.Button}
            onClick={this.togglePersonHandler} >Toggle Persons
            </button>
          {persons}
        </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}


export default App;
