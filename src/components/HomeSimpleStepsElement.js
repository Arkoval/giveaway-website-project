import React from "react";

function SimpleStepsElement(props) {
    return (
        <div className="SimpleStepsElement">
            <img src={props.img} alt=""/>
            <h2>{props.title}</h2>
            <hr/>
            <p>{props.content}</p>
        </div>
    )
}

export default SimpleStepsElement

