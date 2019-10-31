import React from 'react';

const Display = (props) => {
    console.log(props)
    return (
        <div className="display-wrapper">
            <div className='display-num'>
                {props.strike}
            </div>
            <div className='display-num'>
                {props.ball}
            </div>
            <div className='display-num'>
                {props.foul}
            </div>
            <div className='display-num'>
                {props.hit}
            </div>
        </div>
    );
};

export default Display;