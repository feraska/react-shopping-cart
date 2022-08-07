
import './App.scss';

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from 'react';
//import data from "./data.json"
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout';
import store from './store/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from './store/productApi';
import Home from "./pages/Home/Home"
import {BrowserRouter, NavLink, Route,Routes} from "react-router-dom";
import Orders from './pages/Order/Orders';
import './components/Header/Header.scss'
import './components/Footer/Footer.scss'
import NavBar from './components/NavBar/NavBar';
import Test from './pages/Logout/Logout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
function App() {
 
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Header/>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/orders' element={<Orders/>} exact />
        <Route path='/logout' element={<Test/>} exact />
        <Route path='/register' element={<Register/>} exact />
        <Route path='/login' element={<Login/>} exact />
      </Routes>
     
     <Footer/>
     </Provider>
    </BrowserRouter>
  );
  
}

export default App;
