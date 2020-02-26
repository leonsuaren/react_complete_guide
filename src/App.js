import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Roberto", age: 41 },
      { name: "Leon", age: 40 },
      { name: "Nena", age: 19 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  deletePersonHandler = (personsIndex) => {
    const persons = this.state.persons;
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Roberto', age: 41 },
          { name: event.target.value, age: 41 },
          { name: "Nena", age: 19 }
        ]
      }
    )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroudColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = { () =>  this.deletePersonHandler(index) }
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}


export default App;
