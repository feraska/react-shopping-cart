import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import { getAllProduct } from "../store/productApi";
const Read=()=>{
const data=useSelector(state=>state.product.data)
const dispatch = useDispatch();
useEffect(()=>{
getAllProduct(dispatch)

},[])

//console.log("daa"+data)
 return(
    <Home data={data}/>
 )
}
export default Read