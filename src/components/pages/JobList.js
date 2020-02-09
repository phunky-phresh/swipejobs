import React, {useState, useEffect} from 'react';

import axios from 'axios'
import {Link} from 'react-router-dom';
import Title from '../reusedComponents/Title';


function JobList(props) {

const [user, setUser] = useState(props.user);
const [jobs, setJobs] = useState(null);



let userId = user ? user.workerId : '';

useEffect(() => {
    //axios request to get matched jobs for the user. then set as jobs with hooks
    axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`).then(res => {
        setJobs(res.data)
    })
}, []);

    //below if statement checks for state before running following code
    if (!jobs) {
        return ''
    }
    //map out data from the axios request.
    const availJobs = jobs.map(job => {
    return <Link key={job.jobId} value={job.jobId} to='/job' >
                <Title
                    title={job.jobTitle.name}
                    body={job.company.name}
                    value={job.jobId}
                    jobSet={props.setJob}
                    class={'link'}
                />
                <hr />
            </Link>
    })

    return(
        <div className='job'>
        <Title
            title={'Matched Jobs'}
        />
        {availJobs}     
        </div>

    )
}

export default JobList;