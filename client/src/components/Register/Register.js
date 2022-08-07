import axios from "axios"
import { useEffect, useState } from "react"
import { Zoom } from "react-awesome-reveal"
import { useCookies } from "react-cookie"
import Modal from "react-modal"
import { useNavigate } from "react-router-dom"
import Input from "../Input/Input"
import "./Register.scss"
import RegisterModal from "./RegisterModal"
const Register=(props)=>{
    const[value,setValue]=useState();
    const {show,closeModal}=props;
    const [showModal,setShowModal]=useState("");
    const navigate=useNavigate();
    const [reg,setReg]=useState("");
    const [cookies,setCookies,removeCookies]=useCookies();
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
           
           // navigate('/login')
          
          // navigate('/login')
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
    label="Email" 
    type="email"
    name="email"
    onChange={onChange}
    />
        <Input 
    label="Password" 
    type="password"
    name="password"
    onChange={onChange}
    />
        <Input 
    label="First Name" 
    type="text"
    name="firstName"
    onChange={onChange}
    />
        <Input 
    label="Last Name" 
    type="text"
    name="lastName"
    onChange={onChange}
    />

    <button type="submit">Register</button>
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