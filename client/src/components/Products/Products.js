import "./Products.scss"
import Bounce from "react-awesome-reveal";
import { useEffect, useState } from "react";
import ProductModal from "./ProductModal"
import{useSelector,useDispatch} from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import {getAllProduct} from "../../store/productApi"

const Products=(props)=>{
//const {products}=props;
const {addToCart}=props;
const [product,setProduct]=useState(false);
const products=useSelector(state=>state.product.data);
const dispatch = useDispatch();

useEffect(()=>{
    getAllProduct(dispatch)
})



const openModal=(product)=>{
  //  handle();
   // console.log(p)
   // console.log(p);
    
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
                    <img src={product.imageUrl} alt={product.title} onClick={()=>openModal(product)}/>
                    <div className="product-desc">
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                    </div>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </div>
                

            </div>
          
         ))}
           
         <ProductModal product={product} closeModal={closeModal}/>
         </div>
         </Bounce> 
         )

        
}
export default Products