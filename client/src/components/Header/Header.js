import React from "react"
import { words } from "../../words";
import "./Header.scss"
const Header=()=>{
    return(
        <header>
            {words.headerTitle}
        </header>
    )
}
export default Header;