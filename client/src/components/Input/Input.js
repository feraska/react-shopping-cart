const Input=(props)=>{
    const {label,type,name,onChange}=props;
    return(
        <div>
            <label>{label}</label>
            <input 
            type={type}
            required
            name={name}
            onChange={onChange}/>
        </div>
    )
}
export default Input