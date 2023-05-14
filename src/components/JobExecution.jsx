


function JobExecution({execution}) {
    const { id, job_id, start_time, duration, step_executions, execution_scopes, status } = execution;
    return (
      <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{execution_scopes ? execution_scopes[0] : undefined}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{start_time}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{duration}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{step_executions ? step_executions.length : undefined}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className={`${status === 'OK' ? 'text-green-500 bg-green-200' : 'text-red-500 bg-red-200'} w-fit py-1 px-2 rounded text-xs leading-3 mt-2`}>{status}</div>
      </td>
    </tr>
    );
}


export default JobExecution
