import React, { useEffect, useState } from 'react'

const EffectExplained = () => {
    const [data, setData] = useState([])
    const [showToggled, setToggled] = useState(false)


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json))
    },[])

    useEffect(() => {
     console.log("toggled")
    },[showToggled])

  return (
    <div> 
        <h3>Use Effect Example</h3>
        <div style={{marginTop:'2%'}}>
        <button onClick={() => setToggled((prev) => !prev)}>Toogle: open console log to see the effect</button>
        <h4>Posts</h4>
        <ul>{data.slice(0,5).map((item) => (<li>{item.title}</li>))}</ul>
        </div>
    </div>
  )
}

export default EffectExplained


/// notes :
/*
	- Allows you to perform side effects from a function component, such as data fetching, subscriptions, and timer setup, manipulating Dom, updating local storage etc
	- before hooks side effects could only managed in class component using lifecycle methods ex: componentDidMount, componentDidUpdate, 
	- gives you a controlled execution
	- runs only when component mounts 
 */