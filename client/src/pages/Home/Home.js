
import Products from '../../components/Products/Products';
import Filter from '../../components/Filter/Filter';
import Cart from '../../components/Cart/Cart';
import { useEffect, useState } from 'react';


 const Home=(props)=>{
 

 
    const[cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('cartItems'))||[]);
 
    const addToCart=(products)=>{
    const cartItemClone=[...cartItems];
    let isProductExist= false;
    cartItemClone.forEach(p=>{
     if(p.id===products.id){
        p.qty+=1;
      
       isProductExist=true;
      }
    })
   if(!isProductExist){
     cartItemClone.push({...products,qty:1});
   }
   setCartItems(cartItemClone)
         
        }
        
    const removeFromCart=(product)=>{
    
      const cartItemsClone=[...cartItems];
      setCartItems(cartItemsClone.filter(p=>p.id!==product.id))
    }
     useEffect(()=>{
     
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
     })
    return(
        <div className="layout">
    
     
      <main>
        <div className='wrapper'>
         <Products addToCart={addToCart}/>
         <Filter 
         
         />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      </main>
      
     </div>
    )

}
export default Home
