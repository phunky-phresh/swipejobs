import React from 'react';

function Title(props) {
    
    //reusable component for title blocks
   
    return(
        <div value={props.value} onClick={props.jobSet} className="title">
            <h2 value={props.value}>{props.title}</h2>
            <h4 value={props.value}>{props.body}</h4>
        </div>
    )
}
export default Title;