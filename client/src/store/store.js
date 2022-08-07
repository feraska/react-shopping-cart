import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './filterSlice';
import cartSlice from './cartSlice';
import orderSlice from './orderSlice';
import getOrders from './getOrder';
import  postOrders  from './postOrder';
import getProducts from './getProduct';
import productFilterSize from './productFilterSize';


const store=configureStore(
    {
        
         
    reducer:{
        product:getProducts,
        fil:productFilterSize,
        filter:filterSlice,
        cart:cartSlice,
        order:orderSlice,
        getOrder:getOrders,
        postOrder:postOrders,
        

        
    }
});
export default store