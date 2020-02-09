import React from 'react';

function Block(props) {
    
    //reusable component displaying a range of data and content
    if (!props) {
        return ''
    }
    return(
        <div value={props.value} onClick={props.jobSet} className="block">
            <i className={props.icon}></i>
            <span value={props.value} className="flex">
                <h4 value={props.value} >{props.title}</h4>
                <p value={props.value} >{props.body}</p>
                <p>{props.body2}</p>
                <ul>{props.list}</ul>
            </span>
            <i className={props.icon2}></i>

        </div>
    )
}
export default Block;