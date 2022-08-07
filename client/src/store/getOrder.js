import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from "axios";

const initialState={
  data:[],
status:''
}
export const getOrders=createAsyncThunk('orders/gets',async(body)=>{
  const res=await axios.post('/api/orders/get',body);

  console.log(body)
  return res.data;
})

  

export const getOrder = createSlice({
  name: 'getOrder',
  initialState:initialState,
  extraReducers:(builder)=>{
    builder.addCase(getOrders.pending,(state)=>{
    state.status='loading....'
    })
    builder.addCase(getOrders.fulfilled,(state,action)=>{
   
      state.data=action.payload;
    
    state.status=''

    })
    builder.addCase(getOrders.rejected,(state,action)=>{
      state.data=[];
      state.status=action.error.message;
    })
  },
})
export default getOrder.reducer
