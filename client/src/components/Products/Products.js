import "./Products.scss"
import Bounce from "react-awesome-reveal";
import { useState } from "react";
import ProductModal from "./ProductModal"
const Products=(props)=>{
const {products,addToCart}=props;
const [product,setProduct]=useState(false);
const openModal=(product)=>{
    setProduct(product)
}
const closeModal=()=>{
    setProduct(false)
}
    return(
        <Bounce className="products-wrapper" left cascade>
         <div className='products-wrapper'>{products.map(product=>(
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