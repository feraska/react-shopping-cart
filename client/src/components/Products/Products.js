import "./Products.scss"
import Bounce from "react-awesome-reveal";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import ProductModal from "./ProductModal"
import{useSelector,useDispatch} from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import {getAllProduct} from "../../store/productApi"
import getProduct, { action, getProducts } from "../../store/getProduct";
import {productFilterSize} from "../../store/productFilterSize";
import { words } from "./ProductsWords";
var check=false;
const Products=(props)=>{
//const {products}=props;
const {addToCart}=props;
const [product,setProduct]=useState(false);
//const products=useSelector(state=>state.product.data);
const dispatch = useDispatch();
const products=useSelector(state=>state.fil.data);



useEffect(()=>{
    dispatch((productFilterSize({"sizes":"ALL"})))
    
  
  
},[])

const openModal=(product)=>{
  
   
    
    setProduct(product)
}
const closeModal=()=>{
    setProduct(false)
}
 
    return(
        <Bounce className="products-wrapper" left cascade>
        
        
         <div className='products-wrapper'>
           
            {products.map(product=>(
            <div key={product.id}>
                <div className="products-item">
                    <br/>
                    <img src={product.imageUrl} alt={product.title} onClick={()=>openModal(product)}/>
                    <div className="product-desc">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    </div>
                    <button onClick={()=>addToCart(product)}>{words[localStorage.getItem('lang')].add}</button>
                 <br/>
                </div>
                
            </div>
          
         ))}
           
         <ProductModal product={product} closeModal={closeModal}/>
         </div>
         </Bounce> 
         )

        
}
export default Products