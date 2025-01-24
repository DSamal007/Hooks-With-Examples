import React, { useState } from 'react'

const StateExample = () => {
    const [count, setCount] = useState(0)
    const increase = () => setCount((prev) =>  prev + 1);
    const decrease = () => setCount((prev) =>  prev - 1);
  return (
    <div>
        <h3>useState example</h3>
       <div style={{marginBottom:'1%'}}>count : {count}</div>
       <button onClick={increase}>Increase </button>
       <button onClick={decrease}>Increase </button>
    </div>  
  )
}

export default StateExample