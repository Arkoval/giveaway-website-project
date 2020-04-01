import React from 'react';

function ThreeColumnsElement(props) {
    return (
        <div className={'colsEle'}>
            <h2>{props.num}</h2>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default ThreeColumnsElement