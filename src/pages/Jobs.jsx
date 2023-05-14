import JobExecution from '../components/JobExecution';
import Welcome from '../components/Welcome';
import LoadingSpinner from '../components/Loadings/LoadingSpinner';
import { getClientAccessToken, searchJobExecutions } from '../utils/api';
import { useEffect, useState } from 'react';

function Jobs() {
  const [jobExecutions, setJobExecutions] = useState([]);
  const [jobId, setJobId] = useState("");
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (validate) {
        const accessToken = await getClientAccessToken();
        const jobExecJson = await searchJobExecutions(accessToken, jobId);
        setJobExecutions(jobExecJson);
      }
    }

    fetchData();
  }, [jobId, validate]);

  const handleJobIDChange = (e) => {
    setJobId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(jobId){setValidate(true);}
  };
  const handleJobIdEdit = (e) => {
    e.preventDefault();
    setJobExecutions([]);
    setValidate(false)
  };
  console.warn("jobExecutions", jobExecutions)

  if (validate && jobExecutions.length === 0) {
    return (<>
      <div className="container my-8 px-6 mx-auto">
        <Welcome title={"Jobs"} description={"Here you can search for jobs executions by job ID to find the information you need quickly and easily."}/>
        <LoadingSpinner />
        </div>
      </>)
  }
  if(!validate){
    return <>
      <div className="container my-8 px-6 mx-auto">
      <Welcome title={"Jobs"} description={"Here you can search for jobs executions by job ID to find the information you need quickly and easily."}/>
        <div className="mx-auto w-1/3 mt-[10vh]">
          <form onSubmit={handleSubmit}>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" value={jobId} onChange={handleJobIDChange} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Job ID" required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>
        </div>
      </div>
    </>
  }
  return (
    <div className="container my-8 px-6 mx-auto">
      <Welcome title={"Jobs"} description={"Here you can search for jobs executions by job ID to find the information you need quickly and easily."}/>
      {jobExecutions.query && (
          <center className="inline-flex items-center justify-center gap-3 p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="w-full">Searched Executionss by Job : <b>{jobExecutions.query.text_query.search_phrase}</b></span>
            <button type="button" onClick={handleJobIdEdit} className="mt-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</button>
          </center> 
      )}
      <br/><br/>
      {jobExecutions.count > 0 ? (
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">id</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Scope</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">start time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">duration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">executions steps</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {jobExecutions.hits.map((jobExecution) => (
                      <JobExecution key={jobExecution.id} execution={jobExecution} />
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>This job has no executions yet</div>
      )}
    </div>
  );
}

export default Jobs;
