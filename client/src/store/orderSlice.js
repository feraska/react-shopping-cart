import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from "axios";

const initialState={
  data:[],
  loading:false,
  error:''
}
export const getOrders=createAsyncThunk('/api/orders',async()=>{
 const res= await axios.get('api/orders')
 return res.data;

})

  

export const orderSlice = createSlice({
  name: 'order',
  initialState:initialState,
  extraReducers:(builder)=>{
    builder.addCase(getOrders.pending,(state)=>{
      state.loading=true;
    })
    builder.addCase(getOrders.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
      state.error=''

    })
    builder.addCase(getOrders.rejected,(state,action)=>{
      state.loading=false;
      state.data=[];
      state.error=action.error.message;
    })
  }
  // reducers: {

  //   // startProduct:(state)=>{
  //   //     state.loading=true;
  //   // },
  //   // successProduct:(state,action)=>{
  //   //     state.loading=false;
  //   //     state.data=action.payload;
  //   // },
  //   // errorProduct:(state)=>{
  //   //     state.loading=false;
  //   //     state.error=true;
  //   // }
    
  // },
})

export const {  startProduct,successProduct,errorProduct} = orderSlice.actions

export default orderSlice.reducer