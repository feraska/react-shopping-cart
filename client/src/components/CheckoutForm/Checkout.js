import axios from "axios";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import {  Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Register from "../Register/Register";
import  "./Checkout.scss"
const Checkout=(props)=>{
    const{setShowForm,submitOrder,handleChange,showForm}=props;
    const [show,setShow]=useState(false);
    const closeModal=()=>{
        setShow(false)
    }
 
    return(
    <>
    {showForm &&<div className="checkout-form">
    <span className="close-icon" onClick={()=>setShowForm(false)}>&times;</span>
    <Zoom left>
    <span className="register" onClick={()=>setShow(true)}>Register</span>
    <form onSubmit={submitOrder}>
   
       <Input
       label="Email"
       type="email"
       onChange={handleChange}
       name="email"
       />
        <Input
       label="Password"
       type="password"
       onChange={handleChange}
       name="password"
       />
        
        <div>
            <button type="submit" >Login</button>
            
            <Register show={show} closeModal={closeModal}/>
        </div>
    </form>
    </Zoom>
</div>}
</>
    )
}

 export default Checkout