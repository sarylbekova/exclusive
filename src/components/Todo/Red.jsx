import React from 'react'

function Red( {click}) {
  return (
    <div>
      <button onClick={()=> click("red")}>red</button>
    </div>
  )
}

export default Red
