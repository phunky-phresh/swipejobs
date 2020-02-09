import React, {useState, useEffect} from 'react';

//imported libraries
import { HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import * as ROUTES from './constants/routes';

//imported comonents
import './App.scss';
import Nav from './components/Nav';
import JobList from './components/pages/JobList';
import JobCard from './components/pages/JobCard';
import Profile from './components/pages/Profile';

function App() {

  const url = 'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile'

  //hooks to set state without using a react component
  const [user, setUser] = useState(null);
  const [job, setJob] = useState(null);

  useEffect(() => {

    //initial axios request to get user information to be passed through app.
    axios.get(url).then((res) => {
      setUser(res.data)
    })
    
  }, []);

  //function to grab jobId on click. this is passed down to the jobList component
  const handleJobChange = e => {
    setJob(e.target.getAttribute('value'))
  }

  //if statement to ensure user state is set before rendering components and passing props.
  if (!user) {
    return ''
  }
  return (
    //react router for easy linking between pages. navigation
    <Router>
    <div className="container">
      <Nav {...user} />
      <div className="body">
        <Route path={ROUTES.JOBLIST}>
          <JobList 
           setJob = {handleJobChange}
            user = {user} 
          />
        </Route>
        <Route path={ROUTES.JOB}>
          <JobCard 
          jobId = {job}
          {...user} 
          />
        </Route>  
        <Route exact path={ROUTES.PROFILE}>
          <Profile
          {...user} 
          />
        </Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
