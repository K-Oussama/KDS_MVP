import React from 'react'

const HitView = ({ hit }) => {
    const { objectID, host, data_stream, message, log, event } = hit
    console.warn(hit)
  return (
    <div className="p-4 border border-gray-300 rounded shadow">
      <p className="text-lg font-semibold">Log Entry</p>
      <div className="mt-4">
        <p>
          <span className="font-semibold">Timestamp:</span> {hit['@timestamp']}
        </p>
        <p>
          <span className="font-semibold">Version:</span> {hit['@version']}
        </p>
        <p>
          <span className="font-semibold">Data Stream:</span> {data_stream.type} - {data_stream.dataset} - {data_stream.namespace}
        </p>
        <p>
          <span className="font-semibold">Event:</span> {event.original}
        </p>
        <p>
          <span className="font-semibold">Host:</span> {host.name}
        </p>
        <p>
          <span className="font-semibold">Log File Path:</span> {log.file.path}
        </p>
        <p>
          <span className="font-semibold">Message:</span> {message}
        </p>
        <p>
          <span className="font-semibold">Object ID:</span> {objectID}
        </p>
      </div>
    </div>
  )
}

export default HitView