import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input"
import Register from "../Register/Register";
import './Login.scss'

const Login=()=>{
    const[status,setStatus]=useState("");
    const[value,setValue]=useState("");
    const navigate = useNavigate();
    const[cookies,setCookies]=useCookies();
    const [show,setShow]=useState("");
    const [name,setName]=useState("")
    const login=(e)=>{
        e.preventDefault();
        const user={
            email:value.email,
            password:value.password,
           
        }
        axios.post('/api/user',user).then(res=>setStatus(res.data.status));
    }
    const onChange=(e)=>{
        setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    useEffect(()=>{
        if(status=="ok"){
            setCookies('email',value.email);
            axios.post('/api/user/name',
            {email:value.email}).then( res=>setCookies("name",res.data[0].firstName))
       //     setCookies("name",name.firstName+" "+name.lastName)
          //  console.log("name",name)
            navigate('/');
        }
    },[status])
    useEffect(()=>{
       // console.log("name",name)
       
       
    },[name])
    return(
        <div className="login-form">
        <form onSubmit={login}>
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
        
        <button type="submit" className="login">Login</button>
       <span className="register" onClick={()=>setShow(true)}>Register</span>
       <Register show={show} closeModal={()=>setShow(false)}/>
        </form>
        <div>{status}</div>
        </div>
    )
}
export default Login