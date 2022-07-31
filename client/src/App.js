
import './App.scss';

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from 'react';
import data from "./data.json"
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
 
  const[products,setProducts]= useState(data);
  const[sort,setSort]=useState("");
  const [size,setSize]=useState("");
  const[cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('cartItems'))||[]);
  const handleFilterBySize=(e)=>{
    setSize(e.target.value);
    if(e.target.value=="ALL"){
      setProducts(data);
    }
    else{
    let productsClone=[...data];
    let newProducts=productsClone.filter(p=>p.sizes.indexOf(e.target.value)!=-1);
    setProducts(newProducts);
    }
  }
  const handleFilterByOrder=(e)=>{
    let order =e.target.value;
    setSort(order);
    let productsClone=[...data];
    let newProducts=productsClone.sort((a,b)=>{
      switch(order){
        case "lowest":
        return a.price-b.price;
        case "highest":
        return b.price-a.price;
        case "latest":
        return a.id<b.id?1:-1
      }
    
    });
    setProducts(newProducts);


  }
  const addToCart=(products)=>{
      const cartItemClone=[...cartItems];
      let isProductExist= false;
      cartItemClone.forEach(p=>{
        if(p.id==products.id){
          p.qty++;
          isProductExist=true;
        }
      })
      if(!isProductExist){
        cartItemClone.push({...products,qty:1});
      }
      setCartItems(cartItemClone);

  }
  const removeFromCart=(product)=>{
    const cartItemsClone=[...cartItems];
    setCartItems(cartItemsClone.filter(p=>p.id!==product.id))
  }
  useEffect(()=>{
    
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  })
  return (
    <Provider store={store}>
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
     </Provider>
  );
  
}

export default App;
