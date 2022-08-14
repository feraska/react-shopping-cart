import React from "react"
import { words } from "./FooterWords"
import "./Footer.scss"
const Footer=()=>{
   
    return(
    <footer>
        {words[localStorage.getItem('lang')].footerTitle}
        
    </footer>
    )
}
export default Footer