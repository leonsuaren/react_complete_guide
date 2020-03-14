import React, { Fragment, useState } from 'react';

const Cars = (props) => {

    const [ oldCarState, newCarState ] = useState({
        Cars: [
            { name: 'Chevy', year: '1956' },
            { name: 'Mustang', year: '1969' },
            { name: 'Camaro', year: '1979' },
        ]
    });

    const switchCarHandler = () => {
        newCarState({
            Cars: [
                { name: 'Audi', year: '2018' },
                { name: 'Corvet', year: '2020' },
                { name: 'Lamborgini', year: '2028' },
            ]
        })
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'ponter',
        margin: '2px'
    }

    return (

        <Fragment>
            <hr />
            <button style = { style } onClick = { switchCarHandler }>UseState</button>
            <p>This is made to practice UseState() Hook only </p>
            <p>The { oldCarState.Cars[0].name } was build on { oldCarState.Cars[0].year }</p>
            <p>The { oldCarState.Cars[1].name } was build on { oldCarState.Cars[1].year }</p>
            <p>The { oldCarState.Cars[2].name } was build on { oldCarState.Cars[2].year }</p>
        </Fragment>

    )

}

export default Cars;