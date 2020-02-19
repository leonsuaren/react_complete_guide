import React from 'react';

const pets = (props) => {
return (
    <div>
        <p>I'm a { props.type } and My name is { props.name } I'm from { props.origen }</p>
    </div>
)
}

export default pets;