import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducer/counterSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export default store;