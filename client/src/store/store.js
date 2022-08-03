import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./productSlice"
import logger from 'redux-logger'
import filterSlice from './filterSlice';
import cartSlice from './cartSlice';
import orderSlice from './orderSlice';


const store=configureStore(
    {
        
         
    reducer:{
        product:productSlice,
        filter:filterSlice,
        cart:cartSlice,
        order:orderSlice,

        
    }
});
export default store