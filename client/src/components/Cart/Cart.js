import "./Cart.scss"
const Cart=(props)=>{
    const {cartItems,removeFromCart}=props;
    return(
        
        <div className="cart-wrapper">
        <div className="cart-title">{cartItems.length==0?'Cart Empty':
        <p>There is {cartItems.length} products in cart</p>}
        </div>
        <div className="cart-items">
            {cartItems.map(item=>(
                <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt=""/>
                <div className="cart-info">
                    <div>
                        <p> title: {item.title}</p>
                        <p> qty: {item.qty}</p>
                        <p> price: ${item.price}</p>
                
                    </div>
                    <button onClick={()=>removeFromCart(item)}>Remove</button>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
export default Cart