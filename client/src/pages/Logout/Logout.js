import React, { useEffect, useRef, useState, } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom"

import { useCookies } from 'react-cookie';

 const Test=()=> {
  
  const [cookies, setCookie,removeCookie] = useCookies();
  const navigate = useNavigate();
  
 

  useEffect(()=>{
    removeCookie('email');
    removeCookie('name')
    navigate('/')
    
  },[])


 

  return (
    <div>
    
     
    </div>
  )
}
export default Test
