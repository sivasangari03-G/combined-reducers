import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterDecrementAction, counterIncrementAction } from '../redux/counterRedux/counter.action';

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.count);
    // console.log(counter);
    const handleIncrement = () => {
        dispatch(counterIncrementAction());
    }
    const handleDecrement = () => {
		dispatch(counterDecrementAction());
	};
  return (
      <div>
          <h1>counter: {counter}</h1>
          <button onClick={handleIncrement}>INCREMENT</button>
          <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  )
}
