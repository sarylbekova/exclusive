import { createSlice } from "@reduxjs/toolkit";
const basketSlise = createSlice({
    name:"carts",
    initialState:{
        carts:[],
    },
reducers:{
    addCart:(state,action)=>{},
    deleteCart:(state,action)=>{}
   }
})
export const {addCart,deleteCart} = basketSlise.actions;
export default basketSlise.reducer
