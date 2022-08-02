import React from 'react'
import Modal from 'react-modal'
 function CartModal(props) {
    const {cartItems,closeModal,order}=props
  return (
    <Modal isOpen={order} onRequestClose={closeModal}>
<div className="order-info">
    <span className="close-icon" onClick={closeModal}>&times;</span>
    <p className="alert-success">Order done success</p>
    <table>
        <tr>
            <td> Name: </td>
            <td> {order.name} </td>
        </tr>
        <tr>
            <td> Email: </td>
            <td> {order.email} </td>
        </tr>
        <tr>
            <td> Total: </td>
            <td> {cartItems.reduce((a,p)=>{
                return a + p.price
            },0)} </td>
        </tr>
        <tr>
            <td>
                Selected Items:
            </td>
            <td>
                {props.cartItems.map(p=>(
                    <div className="cart-data">
                        <p>Number of product {p.qty}</p>
                        <p>Title of product {p.title}</p>
                    </div>
                ))}
            </td>
        </tr>
    </table>
</div>
</Modal>
  )
}
export default CartModal

