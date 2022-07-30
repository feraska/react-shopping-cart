
import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { useState } from 'react';
import data from "./data.json"
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';

function App() {
  const[products,setProducts]= useState(data);
  const[sort,setSort]=useState("");
  const [size,setSize]=useState("");
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
  return (

     <div className="layout">
      
     <Header/>
      <main>
        <div className='wrapper'>
         <Products products={products}/>
         <Filter 
         handleFilterBySize={handleFilterBySize} size={size}
         handleFilterByOrder={handleFilterByOrder} sort={sort}
         />
        </div>
      </main>
      <Footer/>
     </div>
  
  );
}

export default App;
