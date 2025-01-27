import React from 'react'
import { useDispatch } from 'react-redux'

function Count({clicked, decrement}) {
  const dispach = useDispatch()

  return (
    <div>
      <button onClick={clicked}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => dispach(addTimer())}>Click Redux</button>
    </div>
  )
}

export default Count
