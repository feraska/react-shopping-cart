import React,{useEffect, useLayoutEffect, useMemo, useRef, useState} from "react"
import "./Filter.scss"
import { Flip } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleFilterBySize } from "../../store/filterApi";
const Filter=(props)=>{
   // const value = useRef(null);
  //  const [data,setData]=useState([]);
  //  const dispatch = useDispatch();
    const{handleFilterBySize,size}=props;
    const{handleFilterByOrder,sort}=props;
    //const products=useSelector(state=>state.product.data);
    
   
    const{productsNumber}=props;
  //  const productsNumber=products.length;
    const handle=()=>{
     //  handleFilterBySize(dispatch,products,value.current.value)
    }
 
    
       
    
    return(
     <Flip className="filter-wrapper" left>
           <div >
          
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of Products: {productsNumber}</div>
            <div className="filter-by-size">
            <span>Filter</span>
            <select className="filter-select"   
            onChange={handleFilterBySize} value={size}>
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
            <select className="filter-select" onChange={handleFilterByOrder} value={sort}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="hightest">Hightest</option>
            </select>
            </div>

        </div>
     </Flip>
    )
}
export default Filter