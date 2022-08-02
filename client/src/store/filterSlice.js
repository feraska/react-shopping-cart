import { createSlice  } from '@reduxjs/toolkit'


export const filterSlice = createSlice({
  name: 'filter',
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

export const {  startProduct,successProduct,errorProduct} = filterSlice.actions

export default filterSlice.reducer