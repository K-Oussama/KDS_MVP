import React from 'react'

function Catalogs() {
  return (
    <div>
      <h1>This is Catalogs page.</h1>
      <b>{import.meta.env.VITE_CLIENT_ID}</b>
    </div>
  )
}

export default Catalogs
