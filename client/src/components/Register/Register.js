import axios from "axios"
import { useEffect, useState } from "react"

import Modal from "react-modal"

import Input from "../Input/Input"
import "./Register.scss"
import { words } from "./RegisterWords"
const Register=(props)=>{
    const[value,setValue]=useState();
    const {show,closeModal}=props;
    const [showModal,setShowModal]=useState("");
    const [reg,setReg]=useState("");
    const register=(e)=>{
        e.preventDefault();
        
        axios.post('/api/register',{
            email:value.email,
            password:value.password,
            firstName:value.firstName,
            lastName:value.lastName
        }).then(res=>setReg(res.data));
    }
    const onChange=(e)=>{
        setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}))
        
        
    }
    useEffect(()=>{
        setShowModal(show)
    },[show])
    
    useEffect(()=>{
        if(reg.status==="ok"){
           
          setShowModal(false);
        }
        if(reg.status==="error"){
            setShowModal(true);
        }
    },[reg])
   
    return(
       
    <Modal isOpen={showModal} onRequestClose={closeModal}>
         {console.log(showModal)}
    <span className="close-icon" onClick={closeModal}>&times;</span>
    <div className="register-form">
   
    <form onSubmit={register}>
    <Input 
    label={words[localStorage.getItem('lang')].email}
    type="email"
    name="email"
    onChange={onChange}
    />
        <Input 
    label={words[localStorage.getItem('lang')].password}
    type="password"
    name="password"
    onChange={onChange}
    />
        <Input 
    label={words[localStorage.getItem('lang')].firstName}
    type="text"
    name="firstName"
    onChange={onChange}
    />
        <Input 
    label={words[localStorage.getItem('lang')].lastName} 
    type="text"
    name="lastName"
    onChange={onChange}
    />

    <button type="submit">{words[localStorage.getItem('lang')].register}</button>
    {
        reg&&
    <div>{reg.status}</div>
}
    </form>
    </div>
    </Modal>
    )
}
export default Register