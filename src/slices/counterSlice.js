import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: "todoss",
    initialState,
    reducers: {
      increment: (state, action) => {
        state.count = state.count + 1
      },
      decrement: (state, action) => {
        state.count = state.count - 1; 
      },
      incrementbySpecificValue: (state, action) => {
        state.count += action.payload;
      }
    }  
})

export default counterSlice.reducer;
export const {increment, decrement, incrementbySpecificValue} = counterSlice.actions