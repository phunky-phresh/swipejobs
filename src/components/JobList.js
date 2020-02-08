import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
function JobList(props) {
console.log(props);

const [user, setUser] = useState(props.user);
const [jobs, setJobs] = useState(null);



let userId = user ? user.workerId : '';
useEffect(() => {
    
    axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`).then(res => {
        // console.log(user, 'hey');
        setJobs(res.data)
        
    })
}, []);

    console.log(jobs);
    if (!jobs) {
        return ''
    }
    const availJobs = jobs.map(job => {
    return <Link value={job.jobId} to='/job' ><div value={job.jobId} onClick={props.setJob} className="block"><h1 value={job.jobId}>{job.jobTitle.name}</h1></div><hr /></Link>
    })

    return(
        <div className='job'>
        <h1>joblist</h1>
        {availJobs}
        
        </div>

    )
}

export default JobList;