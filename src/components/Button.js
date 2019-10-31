import React from 'react';

const Button = props => {
    console.log(props)
    return (
        <div className='btn-container'>
            <button onClick={() => props.number()} >{props.buttonValue}</button>
        </div>
    );
};

export default Button;