import { startProduct,successProduct,errorProduct } from "./filterSlice"

export const handleFilterBySizeR=(dispatch,products,value)=>{
   
    if(value=="ALL"){
 
      dispatch(successProduct(products))
    }
    else{
    let productsClone=[...products];
    let newProducts=productsClone.filter(p=>p.sizes.indexOf(value)!=-1);

    
    dispatch(successProduct(newProducts))
    }
  }
  export const handleFilterByOrderR=(dispatch,products,value)=>{
    let order =value;
      
      let productsClone=[...products];
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
      dispatch(successProduct(newProducts))
  }