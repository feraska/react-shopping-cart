import { successProduct } from "./cartSlice";

export const addToCartR=(dispach,cartItems,products)=>{
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
   
   dispach(successProduct(cartItemClone))
  

 //  setCartItems(cartItemClone);

}
export const removeFromCartR=(dispach,cartItems,product)=>{
 const cartItemsClone=[...cartItems];
 const cartItem=cartItemsClone.filter(p=>p.id!==product.id)
 dispach(successProduct(cartItem))
 //setCartItems(cartItemsClone.filter(p=>p.id!==product.id))
}