import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Nav(props) {
console.log(props);
    const userName = props.firstName + ' ' + props.lastName
    return(
        <div className="nav">
            <h1>logo</h1>
        <h1 className="user">{userName}</h1>
        </div>
    )
}

export default Nav;