import React from 'react';
import './Style.css';

const person = (props) => {
return (
    <div className= "Persons">
        <p>I'm a { props.name } and I'm { props.age } years old!!</p>
        <p>{ props.children }</p>
    </div>
)
}

export default person;