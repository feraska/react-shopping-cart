import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./productSlice"
import logger from 'redux-logger'


const store=configureStore(
    {
        
         
    reducer:{
        product:productSlice,
    }
});
export default store