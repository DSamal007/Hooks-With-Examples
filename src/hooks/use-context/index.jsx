import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext(null)

export const UseContextExpained = () => {
    const [isToogle, setIsToogle] = useState(false)


  return (
    <GlobalContext.Provider value={{isToogle, setIsToogle}}> 
        <h3>UseContext Example</h3>
        <h5>other examples : redux, reactquery, etc..</h5>
        <div style={{marginTop:'2%'}}>
            <h2>Parent Component</h2>
        </div>
        <ChildCompoentForToogle/>
        <ChildCompoentForDisplay/>
    </GlobalContext.Provider>
  )
}


export const ChildCompoentForToogle = () => {
    const { setIsToogle } = useContext(GlobalContext)

  return (
    <button onClick={() => setIsToogle((prev) => !prev)}>Toogle</button>
  )
}


export const ChildCompoentForDisplay = () => {
    const { isToogle } = useContext(GlobalContext)

    return (
      <button>Current State: {isToogle? "ON": "OFF"} </button>
    )
  }

// NOTES
/*
    - The useContext hook in React solves the problem of prop drilling, 
    - which occurs when data needs to be passed down through multiple layers of components in a React application.
    - also solves rerendering unnecessary components due to prop drilling
    - context provider: -  is like you are telling which component you are passing the context
*/