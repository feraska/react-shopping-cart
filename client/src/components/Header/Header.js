import React, { useEffect } from "react"
import {  useCookies } from "react-cookie";
import { words } from "./HeaderWords";
import Lang from "../Lang/Lang";
import "./Header.scss"
const Header=()=>{
    
    const[cookies]=useCookies();
    return(
        <header>
            {words[localStorage.getItem('lang')].headerTitle} {cookies.name}
            <Lang/>
        </header>
       
    )
}
export default Header;