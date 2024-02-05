
import {  createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0, 
    },
    reducers: {
      increment: state => {
        state.value += 1;
      },
      decrement: state => {
        state.value -= 1; 
      },
      incrementBy2: state => {
        state.value += 2;
      },
    },
  });

  export default counterSlice;