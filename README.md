# useMemo 

Hook returns a memoized value.
Hook only runs when one of its dependencies update.
This can improve performance.
The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
Hook can be used to keep expensive, resource intensive functions from needlessly running.

# useCallback 

The React useCallback Hook returns a memoized callback function.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 

Problem: 
One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

# useReducer

The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

Syntax
The useReducer Hook accepts two arguments.

useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

The useReducer Hook returns the current stateand a dispatchmethod.



# React Context 

React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling"

The solution is to create context.

Create Context 

`
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()
`

Next we'll use the Context Provider to wrap the tree of components that need the state Context.

Context Provider
Wrap child components in the Context Provider and supply the state value.

`function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
`

Now, all components in this tree will have access to the user Context.

Use the useContext Hook
In order to use the Context in a child component, we need to access it using the useContext Hook.

First, include the useContext in the import statement:

`
function Component5 () 
{
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
`