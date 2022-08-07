import React from "react"
import { Cookies, useCookies } from "react-cookie"
import { words } from "../../words"
import "./Footer.scss"
const Footer=()=>{
   
    return(
    <footer>
        {words.footerTitle}
        
    </footer>
    )
}
export default Footer