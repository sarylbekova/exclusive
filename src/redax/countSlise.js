import { createSlice } from "@reduxjs/toolkit";

const countSlise = createSlice ( {
    name:'counter',
    initialState: {timer:  0 },
    reducers : {
addTimer:(state,action)=>{
state.timer += 1 ;
      }
    }
})
export const {addTimer } = countSlise.actions ; 
export default countSlise.reducer;