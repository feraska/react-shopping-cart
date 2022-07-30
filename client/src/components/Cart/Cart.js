import { useState } from "react";
import Checkout from "../CheckoutForm/Checkout";
import "./Cart.scss"
const Cart=(props)=>{
    const[showForm,setShowForm]=useState(false);
    const[value,setValue]=useState("");
    const {cartItems,removeFromCart}=props;
    const handleChange=(e)=>{
            setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    const submitOrder=(e)=>{
        e.preventDefault();
        const order={
            name:value.name,
            email:value.email
        }
        console.log(order)

    }
    return(
        
        <div className="cart-wrapper">
        <div className="cart-title">{cartItems.length==0?'Cart Empty':
        <p>There is {cartItems.length} products in cart</p>}
        </div>
        <div className="cart-items">
            {cartItems.map(item=>(
                <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt=""/>
                <div className="cart-info">
                    <div>
                        <p> title: {item.title}</p>
                        <p> qty: {item.qty}</p>
                        <p> price: ${item.price}</p>
                
                    </div>
                    <button onClick={()=>removeFromCart(item)}>Remove</button>
                </div>
            </div>
            ))}
        </div>
        {
                cartItems.length!==0&&(
                 <div className="cart-footer"> 
                 <div className="total">Total :${cartItems.reduce((acc,p)=>{
                    return acc+p.price
                 },0)}</div>
                 <button onClick={()=>setShowForm(true)}> select Products </button>
                 </div>
                )
        }
       <Checkout setShowForm={setShowForm}
       submitOrder={submitOrder}
        handleChange={handleChange}
        showForm={showForm} />
       

        </div>
    )
}
export default Cart