import "./Products.scss"

import { useState } from "react";
import ProductModal from "./ProductModal"
const Products=(props)=>{
const {products}=props;
const [product,setProduct]=useState("");
const openModal=(product)=>{
    setProduct(product)
}
const closeModal=()=>{
    setProduct(false)
}
    return(
         <div className='products-wrapper'>{products.map(product=>(
            <div key={product.id}>
                <div className="products-item">
                    <img src={product.imageUrl} alt={product.title} onClick={()=>openModal(product)}/>
                    <div className="product-desc">
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                    </div>
                    <button>Add to Cart</button>
                </div>
                
            </div>
          
         ))}
         <ProductModal product={product} closeModal={closeModal}/>
         </div>
            
         )

        
}
export default Products