import React from 'react'

function Pink( {click}) {
  return (
    <div>
      <button onClick={()=> click("Pink")}>Pink</button>
    </div>
  )
}

export default Pink
