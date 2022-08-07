import Input from "../Input/Input";
import Modal from "react-modal"
const RegisterModal=(props)=>{
    const{show,closeModal}=props;
    return(
    <Modal isOpen={show} onRequestClose={show}>
    <span className="close-icon" onClick={closeModal}>&times;</span>
    <div className="register-form">
    <form>
    <Input 
    label="Email" 
    type="email"
    name="email"
    onchange={onchange}
    />
        <Input 
    label="Password" 
    type="password"
    name="password"
    onchange={onchange}
    />
    {/* <button type="submit">Register</button> */}
    </form>
    </div>
    </Modal>
    )
    

}
export default RegisterModal
