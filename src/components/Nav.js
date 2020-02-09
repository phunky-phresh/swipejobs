import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Nav(props) {
console.log(props);
    const userName = props.firstName + ' ' + props.lastName
    return(
        <div className="nav">
            <div className="part">
            <h2>logo</h2>
            </div>
            <div className="part2">
            <h2 className="user">{userName}</h2>
            </div>
        </div>
    )
}

export default Nav;