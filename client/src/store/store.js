import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./productSlice"
import logger from 'redux-logger'
import filterSlice from './filterSlice';
import cartSlice from './cartSlice';


const store=configureStore(
    {
        
         
    reducer:{
        product:productSlice,
        filter:filterSlice,
        cart:cartSlice
        
    }
});
export default store