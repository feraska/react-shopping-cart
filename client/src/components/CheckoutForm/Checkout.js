import { Zoom } from "react-awesome-reveal";
import Input from "../Input/Input";
import  "./Checkout.scss"
const Checkout=(props)=>{
    const{setShowForm,submitOrder,handleChange,showForm}=props;
    return(
    <>
    {showForm &&<div className="checkout-form">
    <span className="close-icon" onClick={()=>setShowForm(false)}>&times;</span>
    <Zoom left>
    <form onSubmit={submitOrder}>
        
       <Input
       label="Name"
       type="text"
       onChange={handleChange}
       name="name"
       />
        <Input
       label="Email"
       type="text"
       onChange={handleChange}
       name="email"
       />
        
        <div>
            <button type="submit">Checkout</button>
        </div>
    </form>
    </Zoom>
</div>}
</>
    )
}

 export default Checkout