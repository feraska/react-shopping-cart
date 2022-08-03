import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../store/orderApi'
import "./Orders.scss"

export default function Orders() {
    const dispach=useDispatch();
    const orders=useSelector(state=>state.order.data);
    useEffect(()=>{
        getOrder(dispach);
    },[])
  return (
    <div className='orders'>
        <table>
            <thead>
            <tr>
                <td> id </td>
                <td> name </td>
                <td> email </td>
                <td> items </td>
            </tr>
            </thead>
            <tbody>
                {orders && orders.map(order=>(
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.items.map(item=>(
                            <p>{item.title}{item.qty}</p>
                        ))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
