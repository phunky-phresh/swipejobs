import React, {useState, useEffect} from 'react';
import axios from 'axios';

import JobCard from './JobCard';
import JobList from './JobList';

function Body(props) {




    return(
        <div className="body">
            {/* <JobList {...props} /> */}
            {/* <JobCard {...props}/> */}
        </div>
    )
}

export default Body;