


function JobExecution({execution}) {
    const { id, job_id, creation_date, last_modified, log_file_path, exit_status } = execution;
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold m-4">{id}- <span className="opacity-80 text-green-600">{exit_status.code}</span></p>
      </div>
    );
}


export default JobExecution
