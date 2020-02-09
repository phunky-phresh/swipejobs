import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Title from './Title';


function JobList(props) {

const [user, setUser] = useState(props.user);
const [jobs, setJobs] = useState(null);



let userId = user ? user.workerId : '';
useEffect(() => {
    
    axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`).then(res => {
        // console.log(user, 'hey');
        setJobs(res.data)
        
    })
}, []);

    if (!jobs) {
        return ''
    }
    const availJobs = jobs.map(job => {
    return <Link value={job.jobId} to='/job' >
                <Title
                    title={job.jobTitle.name}
                    body={job.company.name}
                    value={job.jobId}
                    jobSet={props.setJob}
                    class={'link'}
                />
                {/* <div value={job.jobId} onClick={props.setJob} className="block"><h1 value={job.jobId}>{job.jobTitle.name}</h1></div> */}
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