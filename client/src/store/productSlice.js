import { createSlice  } from '@reduxjs/toolkit'
import axios from "axios";


export const productSlice = createSlice({
  name: 'product',
  initialState:{
    data:[],
    loading:false,
    error:false
  },
  reducers: {
    
    startProduct:(state)=>{
        state.loading=true;
    },
    successProduct:(state,action)=>{
        state.loading=false;
        state.data=action.payload;
    },
    errorProduct:(state)=>{
        state.loading=false;
        state.error=true;
    }
    
  },
})

export const {  startProduct,successProduct,errorProduct} = productSlice.actions

export default productSlice.reducer