import React,{useEffect, useLayoutEffect, useMemo, useRef, useState} from "react"
import "./Filter.scss"
import { Flip } from "react-awesome-reveal";
import { useSelector,useDispatch } from "react-redux";
import {  } from "react-redux";

import {productFilterSize} from "../../store/productFilterSize";

import { sortByOrder } from "../../store/productFilterSize";
import { words } from "./FilterWords";
const Filter=(props)=>{
 
    const dispatch = useDispatch();
    
    const products=useSelector(state=>state.fil.data);
    const inputEl = useRef(null); 

   const productsNumber=products.length;

       
    
    return(
     <Flip className="filter-wrapper" left>
           <div >
          
            <h2 className="filter-title">{words[localStorage.getItem('lang')].filter}</h2>
            <div className="num-of-products">{words[localStorage.getItem('lang')].numProc}: {productsNumber}</div>
            <div className="filter-by-size">
            <span>{words[localStorage.getItem('lang')].filter}</span>
            <select className="filter-select"   
            onChange={(e)=> dispatch(productFilterSize(
              {
                "sizes":e.target.value,
                "sort":inputEl.current.value
              }
              ))} >
                <option value="ALL">{words[localStorage.getItem('lang')].all}</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            </div>

            <div className="filter-by-order">
            <span>{words[localStorage.getItem('lang')].order}</span>
            <select className="filter-select" onChange={(e)=>dispatch(sortByOrder( e.target.value)) } ref={inputEl}>
                <option value="latest">{words[localStorage.getItem('lang')].latest}</option>
                <option value="lowest">{words[localStorage.getItem('lang')].lowest}</option>
                <option value="highest">{words[localStorage.getItem('lang')].highest}</option>
            </select>
            </div>

        </div>
     </Flip>
    )
}
export default Filter