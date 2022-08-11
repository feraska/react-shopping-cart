import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import {useCookies} from "react-cookie";
import { words } from './NavBarWords';
export default function NavBar() {
  const [cookies,setCookies,removeCookies]=useCookies()
  return (
    <div className='nav'>
    <ul>
      <li>
    <NavLink to="/">{words[localStorage.getItem('lang')].home}</NavLink>
    </li>
    {!cookies.email&&
    <li>
    <NavLink to="/login">{words[localStorage.getItem('lang')].login}</NavLink>
    </li>
  }
    {cookies.email&&
    <li>
    <NavLink to="/orders"> {words[localStorage.getItem('lang')].orders}</NavLink>
    </li>
}
{cookies.email&&
    <li>
    <NavLink to="/logout">{words[localStorage.getItem('lang')].logout}</NavLink>
    </li>
}
    </ul>
    </div>
  )
}
