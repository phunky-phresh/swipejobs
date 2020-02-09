import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import Title from './Title';
import Block from './Block';


function Profile(props) {
console.log(props);



    
    return(
        <div className="job">
            
            <Title
                title={props.firstName + ' ' +props.lastName}
            />
            {/* <hr /> */}
            <Block
                icon={'map marker icon alternate'}
                title={'Address'}
                body={props.address.formattedAddress}
                body2={props.address.zoneId}
              />
             <hr />
              <Block
                icon={'phone icon'}
                title={'Mobile Number'}
                body={props.phoneNumber}
              />
            <hr />
            <Title
                title={'Max Job Distance'}
                body={`${props.maxJobDistance} miles`}
            />
            <div className=" actions">
                <Link to='/joblist' className="link big ui secondary button">Find Jobs</Link>
            </div>
        </div>
    )
}

export default Profile;