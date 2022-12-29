import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCounter } from '../reducer/counterSlice'

export const SubtractButton = () => {
    const dispatch = useDispatch()
  return (
    <>
    <button onClick={()=> dispatch(decreaseCounter())} >-</button></>
  )
}
