import "./Products.scss"
const Products=(props)=>{
const {products}=props;
console.log(products);
    return(
         <div className='products-wrapper'>{products.map(product=>(
            <div key={product.id}>
                <div className="products-item">
                    <img src={product.imageUrl} alt={product.title}/>
                    <div className="product-desc">
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                    </div>
                    <button>Add to Cart</button>
                </div>
                
            </div>
          
         ))}

         </div>
            
         )

        
}
export default Products