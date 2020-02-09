import React from 'react';

import {Link} from 'react-router-dom';
import Title from '../reusedComponents/Title';
import Block from '../reusedComponents/Block';


function Profile(props) {

    
    return(
        <div className="job">
            
            <Title
                title={props.firstName + ' ' +props.lastName}
            />
            
            {/* reusable clock component. passed data as props to then render. helps keep code DRY */}
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
            <Block
                icon={'search icon'}
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