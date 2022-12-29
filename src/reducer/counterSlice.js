import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    sample: "sdfg"
}

const counterSlice = createSlice({
    // 1. name of the slice
    // 2. initial state
    name: 'counter',
    initialState,
    // 3. reducers functions to update value
    reducers: {
       increaseCounter:     (state)=>{
            state.counter = state.counter + 1;
        },
        // anonymous fn receives 2 args
        // 1. state - copy of the state (uses immer)
        // 2. action - payload or if you are sending any data to state, you receive payload
        decreaseCounter: (state) => {
            state.counter = state.counter - 1;
        }
    }
})

 const {reducer, actions} = counterSlice 
// reducer can be object or initialState
// actions can be object or functions
export const {increaseCounter, decreaseCounter} = actions

export default reducer

