import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.scss';

import * as ROUTES from './constants/routes';

import Nav from './components/Nav';
import JobList from './components/JobList';
import JobCard from './components/JobCard';
import Profile from './components/Profile';

function App() {

  const url = 'https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile'
  const [user, setUser] = useState(null);
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setUser(res.data)
    })
    
  }, []);

  const handleJobChange = e => {
    setJob(e.target.getAttribute('value'))
  }

  if (!user) {
    return ''
  }
  return (
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
