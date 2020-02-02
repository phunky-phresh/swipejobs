import React from 'react';

import axios from 'axios';

const url = 'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile'
function JobCard() {

    const [user, setUser] = React.useState(null);
    // cannot make useEffect callback function async
    // React.useEffect(() => {
    //   getUser();
    //   console.log('success');
      
    // }, []);
    // instead, use async / await in separate function, then call
    // function back in useEffect
    // async function getUser() {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   setUser(data);
    //   console.log(data);
      
    // }

//   const jobAd = data.map( job => {
      
//       return <div><img></img></div>
//   })
    const time = new Date(data[0].shifts[0].startDate);
    console.log(typeof time);
    console.log(time);
    
    
    return(
        <div className="job ">
            {/* <div className="hero"> */}
            <img className="hero ui fluid image" src={data[0].jobTitle.imageUrl}></img>
            {/* </div> */}
            
            <div className="block ">
                <h3>{data[0].jobTitle.name}</h3>
                <h4>{data[0].company.name}</h4>
                
            </div>
            <div className="block  highlight">
                <div className="part">
                    <p>Distance</p>
                    <h4>{data[0].milesToTravel}miles</h4>
                </div>
                <div className="part2">
                    <p>Hourly Rate</p>
                    <h4>${data[0].wagePerHourInCents/100}</h4>
                </div>
                
            </div>
            <div className="block ">
                
                <i className="calendar alternate icon"></i>
                <span className="flex">
                <p>Shift Dates</p>
                <h4>{data[0].shifts[0].startDate}</h4>
                <h4>{data[0].shifts[0].endDate}</h4>
                </span>
                <hr/>
            </div>
            <div className="block ">
                
                <i className="map marker icon alternate"></i>
                <span className="flex">
                <p>Location</p>
                <h4>{data[0].company.address.formattedAddress}</h4>
                <p>{data[0].milesToTravel} miles from your job search location</p>
                </span>
                <hr/>
            </div>
            <div className="block ">
                
                <span className="flex">
                <p>Requirements</p>
                </span>
                <hr/>
            </div>
            <div className="block ">
                
                <i className="user circle icon"></i>
                <span className="flex">
                <h4>Report to</h4>
                <h4>{data[0].company.reportTo.name} {data[0].company.reportTo.phone}</h4>
                </span>
                
            </div>
            <div className="block ">
            <div className="block actions">
                <button className="ui grey basic button">No Thanks</button>
                <button className="ui secondary button">I'll Take It</button>
            </div>
            </div>
        </div>
    )
}

export default JobCard;

const data = [
    {
      "jobId": "5775d8e18a488e6c5bb08333",
      "jobTitle": {
        "name": "Construction General Helper",
        "imageUrl": "https://imgs.swipejobs.com/js/job-category/construction-1.jpg"
      },
      "company": {
        "name": "Steve Smith Construction",
        "address": {
          "formattedAddress": "430 Smith St, Chicago, IL 60654, USA",
          "zoneId": "America/Chicago"
        },
        "reportTo": {
          "name": "Judy Smith",
          "phone": "2130010012"
        }
      },
      "wagePerHourInCents": 950,
      "milesToTravel": 3.4,
      "shifts": [
        {
          "startDate": "2019-09-04T21:00:00Z",
          "endDate": "2019-09-05T05:00:00Z"
        }
      ],
      "branch": "Downtown",
      "branchPhoneNumber": "2531233322"
    },
    {
      "jobId": "5775d8e18a488e6c5bb08c13",
      "jobTitle": {
        "name": "Driver",
        "imageUrl": "https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg"
      },
      "company": {
        "name": "C.D. Barnes and Associates",
        "address": {
          "formattedAddress": "123 Main Street, Chicago, IL 60654",
          "zoneId": "America/Chicago"
        },
        "reportTo": {
          "name": "Steve Rogers"
        }
      },
      "wagePerHourInCents": 1081.7,
      "milesToTravel": 11.666,
  
      "shifts": [
        {
          "startDate": "2019-09-04T21:00:00Z",
          "endDate": "2019-09-05T05:00:00Z"
        },
        {
          "startDate": "2019-09-05T21:00:00Z",
          "endDate": "2019-09-06T05:00:00Z"
        },
        {
          "startDate": "2019-09-06T21:00:00Z",
          "endDate": "2019-09-07T05:00:00Z"
        },
        {
          "startDate": "2019-09-07T21:00:00Z",
          "endDate": "2019-09-08T05:00:00Z"
        },
        {
          "startDate": "2019-09-08T21:00:00Z",
          "endDate": "2019-09-09T05:00:00Z"
        },
        {
          "startDate": "2019-09-11T21:00:00Z",
          "endDate": "2019-09-12T05:00:00Z"
        },
        {
          "startDate": "2019-09-12T21:00:00Z",
          "endDate": "2019-09-13T05:00:00Z"
        },
        {
          "startDate": "2019-09-13T21:00:00Z",
          "endDate": "2019-09-14T05:00:00Z"
        },
        {
          "startDate": "2019-09-14T21:00:00Z",
          "endDate": "2019-09-15T05:00:00Z"
        },
        {
          "startDate": "2019-09-15T21:00:00Z",
          "endDate": "2019-09-16T05:00:00Z"
        }
      ],
      "branch": "Chicago",
      "branchPhoneNumber": "2531233311",
      "requirements": [
        "Safety Vest",
        "Hart Hat"
      ]
    }
  ]