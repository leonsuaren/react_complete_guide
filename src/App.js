import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        { name : "Roberto", age : 41 },
        { name : "Leon", age : 40 },
        { name : "Nena", age : 19 }
      ]
    }); 

    const [ otherState, setOtherState ] = useState('Some Other value')

console.log(personsState, otherState)

    const switchNameHandler = () => {
      // console.log('What is clicked!!')
      // DON'T DO THIS: this.state.persons[0].name = "Beto";
      setPersonsState(
        {
          persons: [
            { name : "Beto", age : 41 },
            { name : "Leon", age : 41 },
            { name : "Nena", age : 19 }
          ]
        }
      )
    }

    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <button onClick = { switchNameHandler } >Switch Name</button>
        <Person name= { personsState.persons[0].name } age= { personsState.persons[0].age } />
        <Person name= { personsState.persons[1].name } age= { personsState.persons[1].age } >My Hobbies: Parachute</Person>
        <Person name= { personsState.persons[2].name } age= { personsState.persons[2].age } />
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }

export default app;
