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
      let req = 'N/A'
      if (job.requirements) {
        req = '-' + job.requirements
      }
      
      return <div>
              <div className="hero">
                <img className="hero ui fluid image" src={job.jobTitle.imageUrl} />
              </div>
              <div className="block ">
                <h2>{job.jobTitle.name}</h2>
                <p>{job.company.name}</p>
              </div>
              <div className="block  highlight">
                <div className="part">
                    <h4>Distance</h4>
                    <p>{job.milesToTravel}miles</p>
                </div>
                <div className="part2">
                    <h4>Hourly Rate</h4>
                    <p>{job.wagePerHourInCents/100}</p>
                </div>
              </div>
              <div className="block ">            
                <i className="calendar alternate icon"></i>
                <span className="flex">
                <h4>Shift Dates</h4>
                <p>{job.shifts[0].startDate}</p>
                <p>{job.shifts[0].endDate}</p>
                </span>
              </div>
              <hr/>
              <div className="block ">                
                <i className="map marker icon alternate"></i>
                <span className="flex">
                  <h4>Location</h4>
                  <p>{job.company.address.formattedAddress}</p>
                  <p>{job.milesToTravel} miles from your job search location</p>
                </span>
                <i className="chevron right icon"></i>                
              </div>
              <hr/>
              <div className="block "> 
                <i class="wrench icon"></i>           
                <span className="flex">
                <h4>Requirements</h4>
                <p>{req}</p>
                </span>     
              </div>
              <hr/>
              <div className="block ">         
                <i className="user circle icon"></i>
                <span className="flex">
                <h4>Report to</h4>
                <p>{job.company.reportTo.name} {job.company.reportTo.phone}</p>
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
