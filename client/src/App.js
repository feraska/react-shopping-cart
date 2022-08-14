
import './App.scss';

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { useMemo } from 'react';

import store from './store/store';
import { Provider } from 'react-redux';

import Home from "./pages/Home/Home"
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Orders from './pages/Order/Orders';
import './components/Header/Header.scss'
import './components/Footer/Footer.scss'
import NavBar from './components/NavBar/NavBar';
import Test from './pages/Logout/Logout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
function App() {
  useMemo(()=>{
   
    if(localStorage.getItem('lang')==null){
        localStorage.setItem('lang','eng')
       // window.location.reload(false)
    }
    if(localStorage.getItem('lang')==='eng'){
      document.body.style.direction='ltr'
    }
    else{
      document.body.style.direction='rtl'
    }
  
},[localStorage.getItem('lang')])
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
