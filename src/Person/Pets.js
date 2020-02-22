import React from 'react';

const pets = (props) => {
return (
    <div>
        <p onClick = { props.click } >I'm a { props.type } and My name is { props.name } I'm from { props.origen }</p>
        <p> { props.children } </p>
    </div>
)
}

export default pets;