import React, { Component } from 'react';
import Practice from './Practice'

class ClassComponent extends Component {

    state = {
        practice : [
            { 'number': 1, 'text': "Hola!!" },
            { 'number': 2, 'text': "Hollo!!!" },
            { 'number': 3, 'text': "Hi!!!" }
        ]
    }

    render() {

        return (
            <div>
                <h1>Just practice number {this.state.practice[0].number} how to make a Class Component {this.state.practice[0].text}</h1>
                <h1>Just practice number {this.state.practice[1].number} how to make a Class Component {this.state.practice[1].text}</h1>
                <h1>Just practice number {this.state.practice[2].number} how to make a Class Component {this.state.practice[2].text}</h1>
                <Practice></Practice>
            </div>
        )
    }

}

export default ClassComponent;