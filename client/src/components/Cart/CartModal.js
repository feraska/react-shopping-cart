import axios from 'axios';
import React from 'react'
import { useCookies } from 'react-cookie'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom';
import { words } from './CartWords';
 function CartModal(props) {
    const {cartItems,closeModal,order,orders}=props
    const navigate=useNavigate()
    const [cookies]=useCookies();
  return (
    <Modal isOpen={order} onRequestClose={closeModal}>
<div className="order-info">
    <span className="close-icon" onClick={closeModal}>&times;</span>
    <p className="alert-success">{words[localStorage.getItem('lang')].order}</p>
    <table>
       
        <tr>
            <td> {words[localStorage.getItem('lang')].email}: </td>
            <td> {cookies.email} </td>
        </tr>
        <tr>
            <td> {words[localStorage.getItem('lang')].total}: </td>
            <td> {cartItems.reduce((a,p)=>{
                return a + (p.price*p.qty)
            },0)} </td>
        </tr>
        <tr>
            <td>
                Selected Items:
            </td>
            <td>
                {props.cartItems.map(p=>(
                    <div className="cart-data" key={p.id}>
                        <p>{words[localStorage.getItem('lang')].numPro} {p.qty}</p>
                        <p>{words[localStorage.getItem('lang')].titlePro} {p.title}</p>
                    </div>
                ))}
            </td>
        </tr>
        <button onClick={
            ()=>{
                localStorage.removeItem('cartItems')
               
                axios.post('/api/orders',{"email":cookies.email,"items":props.cartItems}).then()
                navigate('/orders')
        }
        }>Save Order</button>
    </table>
    
</div>
</Modal>
  )
}
export default CartModal

