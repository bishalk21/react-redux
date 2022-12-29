import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseCounter } from '../reducer/counterSlice'

export const AddButton = () => {
    const dispatch = useDispatch()
  return (
    <><button onClick={()=> dispatch(increaseCounter())} >+</button></>
  )
}
