import { startProduct,successProduct,errorProduct } from "./productSlice"
import axios from "axios";
export const getAllProduct=async(dispatch)=>{
    dispatch(startProduct());
    try{
     const res=  await axios({
            method:"GET",
            url:"/api/products"
        })
    dispatch(successProduct(res.data));
    }
    catch(e){
        dispatch(errorProduct());
    }
}