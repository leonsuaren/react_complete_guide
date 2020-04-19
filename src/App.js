import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Pets from './Person/Pets';
import Practice from './Person/Practice';
import ClassComponent from './Person/Classcomponent';
import Cars from './Person/UseState';
import { withAuthentication } from 'aws-amplify-react';

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
    showPersons: false,
    greatings: [
      { number: 1, message: 'Holaaa!!' },
      { number: 2, message: 'HIIII!!' },
      { number: 3, message: 'Hellooo!!' }
    ]
  }

  clickMeHandler = () => {
    // console.log('I\'ve been clicked');
    this.setState(
      {
        greatings: [
          { number: 1, message: 'Hellooo' },
          { number: 2, message: 'HI FROM REACT!!' },
          { number: 3, message: 'Holaaaa!!' }
        ]
      }
    )
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

  practiceNameHandler = (event) => {
    this.setState({
      
    })
  }

  togglePetsHandler = () => {
    const doesShowPets = this.state.showPets;
    this.setState({ showPets: !doesShowPets })
  }

  togglePersonsHandler = () => {
    const doesShowPerson = this.state.showPersons;
    this.setState({ showPersons: !doesShowPerson });
  }

  render() {

    const style = {
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer",
      margin: "2px"
    }

    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really woking!</p>
        <button
          style={style}
          onClick={this.switchNameHandler} >Switch Name</button>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
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
        <button
          style={style}
          onClick={this.togglePetsHandler} >Toggle Pets</button>
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
        <button onClick={this.clickMeHandler} style={style} >Click me!!</button>
        <Practice number={this.state.greatings[0].number} message={this.state.greatings[0].message} />
        <Practice number={this.state.greatings[1].number} message={this.state.greatings[1].message} />
        <Practice number={this.state.greatings[2].number} message={this.state.greatings[2].message}><ClassComponent></ClassComponent> </Practice>
        <Cars></Cars>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this Work?'))
  }
}

export default withAuthentication(App);
