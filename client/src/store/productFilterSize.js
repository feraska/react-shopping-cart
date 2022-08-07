import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import axios from "axios";

const initialState={
  data:[],
  loading:false,
  error:''
}
export const productFilterSize=createAsyncThunk('products/post',async(body)=>{
  const res=await axios.post('/api/products/filterSize',body);
  return res.data;
})

  

export const productFilterSizes= createSlice({
  name: 'product/post',
  initialState:initialState,
  reducers:{
    sortByOrder:(state,action)=>{
    let order=action.payload;
    console.log(order)
    let productsClone=[...state.data];
    let newProducts=productsClone.sort((a,b)=>{
      switch(order){
        case "lowest":
        return a.price-b.price;
        case "highest":
        return b.price-a.price;
        case "latest":
        return a.id<b.id?1:-1
      }
    })
  state.data=[...newProducts];
  console.log(state.data)
  }
},
  extraReducers:(builder)=>{
    builder.addCase(productFilterSize.pending,(state)=>{
      state.loading=true;
    })
    builder.addCase(productFilterSize.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
      state.error=''

    })
    builder.addCase(productFilterSize.rejected,(state,action)=>{
      state.loading=false;
      state.data=[];
      state.error=action.error.message;
    })
  },
})
export const {sortByOrder}=productFilterSizes.actions; 
export default productFilterSizes.reducer
