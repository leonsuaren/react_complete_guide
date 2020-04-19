import React from 'react';
import './Style.css';

const pets = (props) => {
return (
    <div className= "Pets">
        <p onClick = { props.click } >I'm a { props.type } and My name is { props.name } I'm from { props.origen }</p>
        <p> { props.children } </p>
        <input type = "text" onChange = { props.change } value = { props.name } />
    </div>
)
}

export default pets;