import JobExecution from '../components/JobExecution';
import { getClientAccessToken, searchJobExecutions } from '../utils/api';
import { useEffect, useState } from 'react';

function Jobs() {
  const [jobExecutions, setJobExecutions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const accessToken = await getClientAccessToken();
      const jobExecJson = await searchJobExecutions(accessToken);
      setJobExecutions(jobExecJson);
    }

    fetchData();
  }, []);

  if (jobExecutions.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>This is Jobs page.</h1>
      <center>Searched Job : <b>{jobExecutions.query.text_query.search_phrase}</b></center>
      {jobExecutions.hits.map((jobExecution) => (
      <JobExecution key={jobExecution.id} execution={jobExecution} />
      ))}
    </div>
  );
}

export default Jobs;
