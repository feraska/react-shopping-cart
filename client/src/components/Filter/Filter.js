import React,{useEffect, useLayoutEffect, useMemo, useRef, useState} from "react"
import "./Filter.scss"
import { Flip } from "react-awesome-reveal";
import { useSelector,useDispatch } from "react-redux";
import {  } from "react-redux";
import { handleFilterBySize } from "../../store/filterApi";
import {productFilterSize} from "../../store/productFilterSize";
import getProducts from "../../store/getProduct";
import { useCallback } from "react";
import { sortByOrder } from "../../store/productFilterSize";
const Filter=(props)=>{
 
    const dispatch = useDispatch();
    const{handleFilterBySize,size}=props;
    const{handleFilterByOrder,sort}=props;
    const products=useSelector(state=>state.fil.data);
    const inputEl = useRef(null); 
   // const fil=useSelector(state=>state.fil.data);
    //console.log(fil)
   // console.log(products)
   
   // const{productsNumber}=props;
   const productsNumber=products.length;

    const handle=()=>{
     //  handleFilterBySize(dispatch,products,value.current.value)
    }
    // const handleChange = useCallback(
    //   (e) => {
    //     const { value } = e.target;
    //     dispatch(productFilterSize({"sizes":value}))
    //     console.log(value)
    //   },
    //   [dispatch],
    // );
       
    
    return(
     <Flip className="filter-wrapper" left>
           <div >
          
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of Products: {productsNumber}</div>
            <div className="filter-by-size">
            <span>Filter</span>
            <select className="filter-select"   
            onChange={(e)=> dispatch(productFilterSize(
              {
                "sizes":e.target.value,
                "sort":inputEl.current.value
              }
              ))} >
                <option value="ALL">ALL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            </div>

            <div className="filter-by-order">
            <span>Order</span>
            <select className="filter-select" onChange={(e)=>dispatch(sortByOrder( e.target.value)) } ref={inputEl}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
            </div>

        </div>
     </Flip>
    )
}
export default Filter