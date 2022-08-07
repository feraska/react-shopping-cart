import React from "react"
import {  useCookies } from "react-cookie";
import { words } from "../../words";
import "./Header.scss"
const Header=()=>{
    const[cookies]=useCookies();
    return(
        <header>
            {words.headerTitle} {cookies.name}
        </header>
    )
}
export default Header;