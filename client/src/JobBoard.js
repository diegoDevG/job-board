import React, { useState, useEffect } from 'react';
import { JobList } from './JobList';
import { loadJobs } from './requests'


export const JobBoard = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobs = async () => {
      const result = await loadJobs()
      setJobs(result)
    }
    getJobs()
  }, []);

  return (
    <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
 )
}