import React from 'react';

const Practice = (props) => {
    return (
        <div>
            <h1>Just practice number {props.number} how to create a functional component {props.message}</h1>
            <p>
                {props.children}
            </p>
            <input type = "text"  /> 
        </div>
    )
}

export default Practice;