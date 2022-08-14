import { configureStore } from '@reduxjs/toolkit'


import getOrders from './getOrder';

import getProducts from './getProduct';
import productFilterSize from './productFilterSize';


const store=configureStore(
    {
        
         
    reducer:{
        product:getProducts,
        fil:productFilterSize,
        getOrder:getOrders,
        
        

        
    }
});
export default store