import {configureStore} from '@reduxjs/toolkit'
import  countReducer  from '../redax/countSlise'
import usersReducer from './user/userSlice'
import categoryReducer from "./category/CategorySlise"
import productReducer from "./products/productSlise"
import WishReducer from './WishSlise/wish'

const myStore = configureStore ({
    reducer :{
        check: countReducer,
        list:  usersReducer,
        categoryList:categoryReducer,
        product:productReducer,
        wishList:WishReducer
    }
})



export default myStore