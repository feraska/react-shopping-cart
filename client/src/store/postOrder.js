import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from "axios";

const initialState={
  data:[],
  loading:false,
  error:''
}
export const postOrders=createAsyncThunk('orders/post',async(body)=>{
  const res=await axios.post('/api/orders',body);
  return res.data;
})

  

export const postOrder = createSlice({
  name: 'postOrder',
  initialState:initialState,
  extraReducers:(builder)=>{
    builder.addCase(postOrders.pending,(state)=>{
      state.loading=true;
    })
    builder.addCase(postOrders.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
      state.error=''

    })
    builder.addCase(postOrders.rejected,(state,action)=>{
      state.loading=false;
      state.data=[];
      state.error=action.error.message;
    })
  },
})
export default postOrder.reducer
