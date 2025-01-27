import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductByCategory = createAsyncThunk(
    'products/getByCategory',
    async (_,thunkAPI) => {
        try {
            const res = await axios.get(`https://boykot.kg/api/v1/products/`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.results || error.results)
            
        }
    }



   
)
