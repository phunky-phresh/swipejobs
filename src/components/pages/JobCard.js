import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Block from '../reusedComponents/Block';
import Title from '../reusedComponents/Title';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';


function JobCard(props) {
  
  const [jobs, setJobs] = useState(null)
  const userId = props.workerId

  useEffect(() => {
    axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`).then(res => {
        setJobs(res.data)   
    }).catch( err => {
      console.log(err);
    })
  }, []);

  // function to accept job and post to API
  const acceptJob = () => {
    axios.post(`https://test.swipejobs.com/api/worker/${userId}/job/${props.jobId}/accept`).then(res => {
      console.log('accept', res);
      
    }).catch( err => {
      console.log(err);
      
    })
  } 

    // function to reject job and post to API
  const rejectJob = () => {
    axios.post(`https://test.swipejobs.com/api/worker/${userId}/job/${props.jobId}/reject`).then(res => {
      console.log('reject', res);
    }).catch( err => {
      console.log(err);
      
    })
  }


  //Below map function runs through data of matched job. then returns a block of html code to render on the job page.
if (jobs) {
  var jobDetails = jobs.map( job => {
    if (job.jobId === props.jobId) {
      let req = 'N/A'
      if (job.requirements) {
        req = (job.requirements).map( req => {
        return <li key={req}>{req}</li>

        })
      }
      
      
      let shift1Start = new Date(job.shifts[0].startDate)
      let shift2End = new Date(job.shifts[0].endDate)

      //used dateFormat to format start and finish times to correct date and time format
      let start = (dateFormat(shift1Start, "UTC:mmm d, ddd h:MM TT")).toUpperCase();
      let end = (dateFormat(shift2End, "UTC:h:MM TT")).toUpperCase();
      
      
      return <div key={job.jobId}>
              <div className="hero">
                <img alt={job.jobTitle.name} className="hero ui fluid image" src={job.jobTitle.imageUrl} />
              </div>
              <Title
                title={job.jobTitle.name}
                body={job.company.name}
              />
              <div className="  highlight">
                <div className="part">
                    <h4>Distance</h4>
                    <p>{Number.parseFloat(job.milesToTravel).toFixed(2)} miles</p>
                </div>
                <div className="part2">
                    <h4>Hourly Rate</h4>
                    <p>${Number.parseFloat(job.wagePerHourInCents/100).toFixed(2)}</p>
                </div>
              </div>
              <Block
                icon={'calendar alternate icon'}
                title={'Shift Dates'}
                body={start + ' - ' + end}
                body2={start + ' - ' + end}
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
                list={req}
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
                <Link to='/joblist' onClick={rejectJob} className="big ui grey basic button">No Thanks</Link>
                <Link to='/joblist' onClick={acceptJob} className="big ui secondary button">I'll Take It</Link>
            </div>
            
        </div>
    )
}

export default JobCard;
