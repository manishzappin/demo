import React from 'react';
import {  useSelector, useDispatch } from 'react-redux';



import counterSlice from './Slice/CounterSlice';


function Counter() {
    const count = useSelector(state => state.counter.value);
    
    const dispatch = useDispatch();
  
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatch(counterSlice.actions.increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(counterSlice.actions.incrementBy2())}>
          Increment By 2 (TWO)
        </button>

       

      </div>
    );
  }

  export default Counter;