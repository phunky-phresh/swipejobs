import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    const userName = props.firstName + ' ' + props.lastName
    return(
        <div className="nav">
            <div className="part">
            <h2>logo</h2>
            </div>
            <div className="part2">
            <Link to='/'>
                <h2 className="user">{userName}</h2>
            </Link>
            </div>
        </div>
    )
}

export default Nav;