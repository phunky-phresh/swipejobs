import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    
    const userName = props.firstName + ' ' + props.lastName

    return(
        <div className="nav">        
            <img alt='logo' className='logo' src="https://www.swipejobs.com/images/logo-name.png" />       
            <div className="part2">
            <Link to='/'>
                <h2 className="user">{userName}</h2>
            </Link>
            </div>
        </div>
    )
}

export default Nav;