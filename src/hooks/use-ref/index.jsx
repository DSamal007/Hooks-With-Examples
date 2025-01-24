import React, { useEffect, useRef, useState } from 'react'

/* example 1 */
const RefExample = () => {
  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.focus() // focus on the input
    // inputRef.current.value = "aaaa" // this will not re render the component but changes the input value
    console.log(inputRef.current.value, "Value") // allowes to see all the value in the dom in the input
  }

  useEffect(() => {
    console.log('page re rendered check')
  },[])

  return (
    <div>
      <h3>useRef example 1</h3>
      accessing dom elements directly if it needs to, and get the dom value without using a state<br/>
      <input type='text' ref={inputRef} style={{marginTop:'2%'}}/>
      <button onClick={onClick}>console</button>
    <RefExampleTwo/>
  </div>  
  )
}

export default RefExample

/* example 2 */
const RefExampleTwo = () => {
  const [count, setCount] = useState(0)
  const previousCount = useRef(0)
  useEffect(() => {
    previousCount.current = count
  },[count])
  return (
    <div>

    {/* example 2 */}
    <h3>useRef example 2</h3>
    technically like stores previous value of states even though state value changes with the component rerenders
    <div style={{marginTop:'2%'}}>
      <div>count: {count}</div>
      <div>prev count: {previousCount.current}</div>
      <button onClick={() => setCount((prev) => prev+1)}>increment</button>
    </div>
  </div>  
  )
}


// note
/*
useEffect is acts like a little box where it stores value even if the component re renders
often used for two different things : 
  1. accessing dom elements directly if it needs to
  2. keeping a mutable value : technically like stores previous value of states even though state value changes with the 
      component rerenders
  3. specially used if a value u want to store but do not want to display
 */