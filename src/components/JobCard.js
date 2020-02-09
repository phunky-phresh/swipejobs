import React, {useState, useEffect} from 'react';

import axios from 'axios';

import Block from './Block';

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
      
    })
  }  
  const rejectJob = () => {
    axios.post(`https://test.swipejobs.com/api/worker/${userId}/job/${props.jobId}/reject`).then(res => {
      
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
              {/* <Block
                title={job.jobTitle.name}
                body={job.company.name}
              /> */}
              <div className="jobHead">
                <h2>{job.jobTitle.name}</h2>
                <p>{job.company.name}</p>
              </div>
              <div className="block  highlight">
                <div className="part">
                    <h4>Distance</h4>
                    <p>{Number.parseFloat(job.milesToTravel).toFixed(2)}miles</p>
                </div>
                <div className="part2">
                    <h4>Hourly Rate</h4>
                    <p>{job.wagePerHourInCents/100}</p>
                </div>
              </div>
              <Block
                icon={'calendar alternate icon'}
                title={'Shift Date'}
                body={job.shifts[0].startDate}
                body2={job.shifts[0].endDate}
               />
              <hr/>
              <Block
                icon={'map marker icon alternate'}
                title={'Location'}
                body={job.company.address.formattedAddress}
                body2={`${Number.parseFloat(job.milesToTravel).toFixed(2)} miles from your job search location`}
                icon2={'chevron right icon'}
              />
              <hr/>
              <Block
                icon={'wrench icon'}
                title={'Requirements'}
                body={req}
              />
              <hr/>
              <Block
                icon={'user circle icon'}
                title={'Report to'}
                body={`${job.company.reportTo.name} ${job.company.reportTo.phone}`}
              />
            </div>
    }
  })
}


    
    return(
        <div className="job ">

            {jobDetails}


          

            <div className=" actions">
                <button onClick={rejectJob} className="big ui grey basic button">No Thanks</button>
                <button onClick={acceptJob} className="big ui secondary button">I'll Take It</button>
            </div>
            
        </div>
    )
}

export default JobCard;
