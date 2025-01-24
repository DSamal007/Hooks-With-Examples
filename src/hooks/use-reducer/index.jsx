import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case('increment'):  return {count: state.count + 1}
    case('decrement'):  return {count: state.count - 1}
    case('double'):  return {count: state.count * 2}
    default: console.log("no action selected")
  }
}
const ReducerExplained = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
        <h3>useState example 1</h3>
       <div style={{marginBottom:'1%'}}>count : {state?.count}</div>
       <button onClick={() => dispatch({type: 'increment'})}>Increase </button>
       <button onClick={() => dispatch({type: 'decrement'})}>Decrese </button>
       <button onClick={() => dispatch({type: 'double'})}>Double </button>

       <h3>useState example 2</h3>
       <div ><SignUpWithReducer/></div>

    </div>  
  )
}

export default ReducerExplained


const initialState = {
  username:'',
  email:'',
  password:'',
  errors:{}
}

function formReducer(state, action) {
  switch (action.type) {
    case 'update_field':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' },
      };
    case 'set_error':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case 'reset_form':
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const SignUpWithReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch({type: "update_field" , field: name, value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let hasErrors = false
    if(!state.username){
      dispatch({type:'set_error', field: 'username', error: 'Username is required' })
      hasErrors = true;
    }
    if(!state.email.includes('@')){
      dispatch({type:'set_error', field: 'email', error: 'invalid email' })
      hasErrors = true;
    }
    if(state.password.length < 6){
      dispatch({type:'set_error', field: 'password', error: 'Password must be at least 6 characters' })
      hasErrors = true;
    }

    if(!hasErrors){
      console.log('FORM SUBMITTED', state)
      dispatch({ type: 'reset_form' });
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        {state.errors.username && <span>{state.errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {state.errors.email && <span>{state.errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        {state.errors.password && <span>{state.errors.password}</span>}
      </div>

      <button type="submit">Sign Up</button>
      <button type="button" onClick={() => dispatch({ type: 'reset_form' })}>
        Reset
      </button>
    </form>
  );


  // notes
  /*
  UseReducer is a hook that manages state within a single React component, 
  while Redux is a library that manages state across an entire application but have a catch of combining custom hooks and useReducer for globally managing state.


  Simple state with one or two variables	- use useState 
  Complex state with multiple sub-states or transitions	-- use useReducer 
  State changes involve many interdependent actions or logic - use useReducer 

  Simplified Example: Shopping Cart, signup, login
      Imagine you’re building a shopping cart. You need to:

  Add items.
  Remove items.
  Clear the cart.
  */
}

