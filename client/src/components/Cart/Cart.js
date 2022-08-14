import { useEffect, useState } from "react";

import "./Cart.scss"
import { Bounce } from "react-awesome-reveal";

import CartModal from "./CartModal";

import { useDispatch } from "react-redux";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { words } from "./CartWords";
const Cart=(props)=>{
    const [order,setOrder]=useState("");
    const[showForm,setShowForm]=useState(false);
    const[value,setValue]=useState("");
    const[status,setStatus]=useState("");
    const {cartItems,removeFromCart}=props;
    const[cookies,setCookies,removeCookies]=useCookies();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleChange=(e)=>{
            setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }

    const submitOrder=(e)=>{
        e.preventDefault();
        const order={
            email:value.email,
            password:value.password,
            items:cartItems
        }
        const user={
            email:value.email,
            password:value.password,
           
        }
       
        axios.post('/api/user',user).then(res=>setStatus(res.data.status));
     
       
        
        
    }
    useEffect(()=>{
        
         if(status==="ok"){
            
             setShowForm(false)
           
             setCookies('email',value.email)
   
             navigate('/')
          }
  
     },[status])
   
    const closeModal=()=>{
        setOrder(false)
    }
    return(
        
    
          <div className="cart-wrapper">
        <div className="cart-title">{cartItems.length==0?'Cart Empty':
        <p>There is {cartItems.length} products in cart</p>}
        </div>
       <CartModal cartItems={cartItems} order={order}  closeModal={closeModal}/>
        
        <Bounce bottom cascade>
            {cartItems.map(item=>(
                <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt=""/>
                <div className="cart-info">
                    <div>
                        <p> {words[localStorage.getItem('lang')].title}: {item.title}</p>
                        <p> {words[localStorage.getItem('lang')].qty}: {item.qty}</p>
                        <p> {words[localStorage.getItem('lang')].price}: ${item.price}</p>
                
                    </div>
                    <button onClick={()=>removeFromCart(item)}>{words[localStorage.getItem('lang')].remove}</button>
                </div>
            </div>
            ))}
            </Bounce>
        
        
        {
                cartItems.length!==0&&(
                 <div className="cart-footer"> 
                 <div className="total">Total :${cartItems.reduce((acc,p)=>{
                    return acc+(p.price*p.qty)
                 },0)}</div>
                 <button onClick={
                    ()=>{
                        if(cookies.email){
                          //  setShowForm(false)
                            setOrder(true)
                          
                            
                        }
                        else{
                            navigate('/login')
                          //  setShowForm(true)
                      
                        }
                    }
                 }>
                    {words[localStorage.getItem('lang')].selPro}
                     </button>
                 </div>
                )
        }
    
        </div>
   
    )
}
export default Cart