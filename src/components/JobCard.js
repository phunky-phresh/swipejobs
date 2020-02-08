import React, {useState, useEffect} from 'react';

import axios from 'axios';
function JobCard(props) {
  console.log(props);
  

  // const [userId, setUserId] = useState(props.userId)
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    const userId = props.workerId
    axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`).then(res => {
        // console.log(user, 'hey');
        setJobs(res.data)
        
    })
  }, []);

if (jobs) {
  var jobDetails = jobs.map( job => {
    if (job.jobId === props.jobId) {
      console.log('yup');
      
      return <div><h2>yup</h2></div>
    }
  })
}


    
    return(
        <div className="job ">
            {/* <div className="hero"> */}
            {/* <img className="hero ui fluid image" src={data[0].jobTitle.imageUrl}></img> */}
            {/* </div> */}
            
            <div className="block ">
                {/* <h3>{data[0].jobTitle.name}</h3> */}
                {/* <h4>{data[0].company.name}</h4> */}
                {jobDetails}
                
            </div>
            <div className="block  highlight">
                <div className="part">
                    <p>Distance</p>
                    {/* <h4>{data[0].milesToTravel}miles</h4> */}
                </div>
                <div className="part2">
                    <p>Hourly Rate</p>
                    {/* <h4>${data[0].wagePerHourInCents/100}</h4> */}
                </div>
                
            </div>
            <div className="block ">
                
                <i className="calendar alternate icon"></i>
                <span className="flex">
                <p>Shift Dates</p>
                {/* <h4>{data[0].shifts[0].startDate}</h4>
                <h4>{data[0].shifts[0].endDate}</h4> */}
                </span>
                
            </div>
            <hr/>
            <div className="block ">
                
                <i className="map marker icon alternate"></i>
                <span className="flex">
                <p>Location</p>
                {/* <h4>{data[0].company.address.formattedAddress}</h4>
                <p>{data[0].milesToTravel} miles from your job search location</p> */}
                </span>
                <i className="chevron right icon"></i>
                
            </div>
            <hr/>
            <div className="block ">
                
                <span className="flex">
                <p>Requirements</p>
                </span>
                
            </div>
            <hr/>
            <div className="block ">
                
                <i className="user circle icon"></i>
                <span className="flex">
                <h4>Report to</h4>
                {/* <h4>{data[0].company.reportTo.name} {data[0].company.reportTo.phone}</h4> */}
                </span>
                
            </div>
            {/* <div className="block "> */}
            <div className="block actions">
                <button className="big ui grey basic button">No Thanks</button>
                <button className="big ui secondary button">I'll Take It</button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default JobCard;
