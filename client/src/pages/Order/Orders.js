import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/getOrder'
//import { getOrder } from '../../store/orderApi'
import "./Orders.scss"

 const Orders=()=> {
    const dispach=useDispatch();
    const [cookies,setCookies,removeCookies]=useCookies();
    const orders=useSelector(state=>state.getOrder.data);
    const {status}=useSelector(state=>state.getOrder);
   
    useEffect(()=>{
        dispach(getOrders({"email":cookies.email}));
       
    },[cookies.email])
   
  return (
    <div className='orders'>
        <div >{status}</div>
        <table>
          
            <thead >
                {
            orders.length!=0 &&   
            <tr>
                
                <td> id </td>
                <td> email </td>
                <td> items </td>
                </tr>
 }
            
            
            </thead>
 
            <tbody>
                {orders.length!=0 && orders.map(order=>(
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.email}</td>
                        <td>{order.items.map(item=>(
                            <p>{item.title} ,qty {item.qty}</p>
                        ))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Orders
