import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addWish:(state,action) =>{
            const findProduct = state.items.find((x) => x.id != action.payload.id)
            if(!findProduct){
                state.items.push(action.payload)
            }
            state.items.push(action.payload)
        },
        deleteWish: (state,action) =>{
state.items = state.items.filter((x) => x.id !== action.payload)
        }
    }
})

export const {addWish,deleteWish} = wishSlice.actions;
export default wishSlice.reducer