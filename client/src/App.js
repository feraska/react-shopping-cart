
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
function App() {
 
  return (
    <Provider store={store}>
     <Home/>
     </Provider>
  );
  
}

export default App;
