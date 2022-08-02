
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from 'react';
//import data from "../../data.json"
import Products from '../../components/Products/Products';
import Filter from '../../components/Filter/Filter';
import Cart from '../../components/Cart/Cart';
//import Checkout from './components/CheckoutForm/Checkout';
import {  useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../store/productApi';
import { handleFilterByOrderR, handleFilterBySizeR } from '../../store/filterApi';
import { addToCartR,removeFromCartR } from '../../store/cartApi';

const Home=(props)=>{
    const[cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('cartItems'))||[]);

    var data=useSelector(state=>state.product.data);
    const filter=useSelector(state=>state.filter.data);
    const cart=useSelector(state=>state.cart.data);
    const dispatch = useDispatch();
    useEffect(()=>{
        getAllProduct(dispatch)
        },[])
    const[products,setProducts]= useState(data);
   useEffect(()=>{
   setProducts(data)
    },[data])
    useEffect(()=>{
       setProducts(filter)
       
     
    },[filter])
    

    const[sort,setSort]=useState("");
    const [size,setSize]=useState("");
    const handleFilterBySize=(e)=>{
        setSize(e.target.value);
        handleFilterBySizeR(dispatch,data,e.target.value)
       
       
    }
    const handleFilterByOrder=(e)=>{
        setSort(e.target.value);
        handleFilterByOrderR(dispatch,data,e.target.value)
 
  
  
    }
    const addToCart=(products)=>{
         //addToCartR(dispatch,cartItems,products)
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
      //  removeFromCartR(dispatch,cartItems,products)
      const cartItemsClone=[...cartItems];
      setCartItems(cartItemsClone.filter(p=>p.id!==product.id))
    }
     useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
     })
    return(
        <div className="layout">
      
     <Header/>
     
      <main>
        <div className='wrapper'>
         <Products products={products} addToCart={addToCart}/>
         <Filter 
         productsNumber={products.length}
         handleFilterBySize={handleFilterBySize} size={size}
         handleFilterByOrder={handleFilterByOrder} sort={sort}
         />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      </main>
      <Footer/>
     </div>
    )

}
export default Home