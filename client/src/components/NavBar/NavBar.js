import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import {useCookies} from "react-cookie";
export default function NavBar() {
  const [cookies,setCookies,removeCookies]=useCookies()
  return (
    <div className='nav'>
    <ul>
      <li>
    <NavLink to="/">Home</NavLink>
    </li>
    {!cookies.email&&
    <li>
    <NavLink to="/login">Login</NavLink>
    </li>
  }
    {cookies.email&&
    <li>
    <NavLink to="/orders"> Orders</NavLink>
    </li>
}
{cookies.email&&
    <li>
    <NavLink to="/logout">Logout</NavLink>
    </li>
}
    </ul>
    </div>
  )
}
