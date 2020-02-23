import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

state =  {
      persons: [
        { name : "Roberto", age : 41 },
        { name : "Leon", age : 40 },
        { name : "Nena", age : 19 }
      ], 
      otherState : "Some other value"
    }; 


 switchNameHandler = (newName) => {
      // console.log('What is clicked!!')
      // DON'T DO THIS: this.state.persons[0].name = "Beto";
      this.setState(
        {
          persons: [
            { name : newName, age : 41 },
            { name : "Leon", age : 41 },
            { name : "Nena", age : 19 }
          ]
        }
      )
    }

    nameChangedHandler = (event) => {
      this.setState(
        {
          persons: [
            { name : 'Roberto', age : 41 },
            { name : event.target.value, age : 41 },
            { name : "Nena", age : 19 }
          ]
        }
      )
    }

    render () {

      const style = {
        backgroudColor: "white",
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      return (
        <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <button 
        style = { style } 
        onClick = { () => this.switchNameHandler('Beto!!') } >Switch Name</button>
        <Person
        name= { this.state.persons[0].name } 
        age= { this.state.persons[0].age } />
        <Person 
        name= { this.state.persons[1].name } 
        age= { this.state.persons[1].age }
        click = { this.switchNameHandler.bind(this, 'Beto!')  } 
        change= { this.nameChangedHandler }
        >My Hobbies: Parachute</Person>
        <Person 
        name= { this.state.persons[2].name } 
        age= { this.state.persons[2].age } />
        </div>
        );
        // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
      }
  }


export default App;
