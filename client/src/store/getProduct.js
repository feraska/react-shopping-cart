import { createSlice,createAsyncThunk,createAction  } from '@reduxjs/toolkit'
import axios from "axios";



const initialState={
  data:[],
status:''
}

export const getProducts=createAsyncThunk('products/get',async()=>{
  const res=await axios.get('/api/products');
  console.log()
  return res.data;
})

// let v;
//  export const action = (type)=>{
//   console.log(type)
//     switch(type){
     
//       case 'get-product':
//          return (getProducts.action.type)
//     }
//   }
 //console.log(v)


export const getProduct = createSlice({
  name: 'getProduct',
  initialState:initialState,
  extraReducers:(builder)=>{
    
    builder.addCase(getProducts.pending,(state)=>{
    state.status='loading....'
   
   // console.log(getProduct.actions)
    })
    //console.log(action.actions)
    builder.addCase(getProducts.fulfilled,(state,action)=>{
   
      state.data=action.payload;
   
    
    state.status=''

    })
    builder.addCase(getProducts.rejected,(state,action)=>{
      state.data=[];
      state.status=action.error.message;
    })
  },
})
export default getProduct.reducer