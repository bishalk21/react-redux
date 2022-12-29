This is react-redux basics.

https://redux-toolkit.js.org/tutorials/quick-start

# Installation

npm install

# Run

npm start


## @reduxjs/toolkit


Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.

`npm install @reduxjs/toolkit`

## react-redux

React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

`npm install react-redux`

## redux

Redux is a predictable state container for JavaScript apps.

`npm install redux`

Steps to configure React-redux app:

- install redux, @reduxjs/toolkit and react-redux

### connecting store redux to app
- create store.js
- install redux devtools extensions
- set up the app
- import configureStore in store and create reducer 
- import provider in root rendering page and wrap app.js in index.js
- import store.js from store to index.js and pass it in Provider as props

### creating slice
- create slice.js
- import createSlice from @reduxjs/toolkit
- create slice and export it
- import slice in store.js and add it to reducer

### pulling data from slice to display

- import useSelector from react-redux

### useSelector()

- useSelector() is a hook that allows you to extract data from the Redux store state, using a selector function.
- useSelector() will return the latest value returned by the selector whenever the function component renders.
- useSelector() accepts a single selector function as an argument. The selector function should take the Redux store state as an argument, and return the data that the component needs.
- useSelector() will re-run the selector whenever the function component renders. It uses strict === reference equality checks to determine if the selector results have changed, and will only re-render the component if the selector returns a different value.
- useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched. If the selector returns the same value as before, the component will not be re-rendered.

- import slice in component
- use slice state in component

### dispatching actions

- import useDispatch from react-redux

### useDispatch()

- useDispatch() is a hook that returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
- useDispatch() accepts no arguments and returns a reference to the dispatch function from the Redux store. You may call store.dispatch directly, but useDispatch() will give you the most recent dispatch function from the store, and is guaranteed to not change between renders.

- import slice in component
- use slice actions in component






