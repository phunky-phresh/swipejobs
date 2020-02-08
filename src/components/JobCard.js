import React, {useState, useEffect} from 'react';

import axios from 'axios';
function JobCard(props) {
  
  const [jobs, setJobs] = useState(null)
  const [job, setJob] = useState(null)
  const userId = props.workerId
  useEffect(() => {
    
    axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`).then(res => {
        setJobs(res.data)   
    })
  }, []);

  const acceptJob = () => {
    axios.post(`https://test.swipejobs.com/api/worker/${userId}/job/${props.jobId}/accept`).then(res => {
      console.log(res);
      
    })
  }  
  const rejectJob = () => {
    axios.post(`https://test.swipejobs.com/api/worker/${userId}/job/${props.jobId}/reject`).then(res => {
      console.log(res);
      
    })
  }

if (jobs) {
  var jobDetails = jobs.map( job => {
    if (job.jobId === props.jobId) {
      let req = 'nothing'
      if (job.requirements) {
        req = '-' + job.requirements
      }
      
      return <div>
              <div className="hero">
                <img className="hero ui fluid image" src={job.jobTitle.imageUrl} />
              </div>
              <div className="block ">
                <h3>{job.jobTitle.name}</h3>
                <h4>{job.company.name}</h4>
              </div>
              <div className="block  highlight">
                <div className="part">
                    <p>Distance</p>
                    <h4>{job.milesToTravel}miles</h4>
                </div>
                <div className="part2">
                    <p>Hourly Rate</p>
                    <h4>{job.wagePerHourInCents/100}</h4>
                </div>
              </div>
              <div className="block ">            
                <i className="calendar alternate icon"></i>
                <span className="flex">
                <p>Shift Dates</p>
                <h4>{job.shifts[0].startDate}</h4>
                <h4>{job.shifts[0].endDate}</h4>
                </span>
              </div>
              <hr/>
              <div className="block ">                
                <i className="map marker icon alternate"></i>
                <span className="flex">
                  <p>Location</p>
                  <h4>{job.company.address.formattedAddress}</h4>
                  <p>{job.milesToTravel} miles from your job search location</p>
                </span>
                <i className="chevron right icon"></i>                
              </div>
              <hr/>
              <div className="block ">            
                <span className="flex">
                <p>Requirements</p>
                <p>{req}</p>
                </span>     
              </div>
              <hr/>
              <div className="block ">         
                <i className="user circle icon"></i>
                <span className="flex">
                <p>Report to</p>
                <h4>{job.company.reportTo.name} {job.company.reportTo.phone}</h4>
                </span>              
              </div>
            </div>
    }
  })
}


    
    return(
        <div className="job ">

            {jobDetails}




            {/* <div className="block "> */}
            <div className="block actions">
                <button onClick={rejectJob} className="big ui grey basic button">No Thanks</button>
                <button onClick={acceptJob} className="big ui secondary button">I'll Take It</button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default JobCard;
