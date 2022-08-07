// import { startProduct,successProduct,errorProduct } from "./orderSlice"
// import axios from "axios";
// export const postOrder=async(dispatch,body)=>{
//     dispatch(startProduct());
//     try{
//      const res=  await axios({
//             method:"POST",
//             url:"/api/orders",
//             data:body
//         })
//     dispatch(successProduct([...res.data));
//    // getOrder(dispatch)
//     }
//     catch(e){
//         dispatch(errorProduct());
//     }

// }
// export const getOrder=async(dispatch)=>{
//     dispatch(startProduct());
//     try{
//      const res=  await axios({
//             method:"GET",
//             url:"/api/orders",
        
//         })
//     dispatch(successProduct([...res.data]));
//     }
//     catch(e){
//         dispatch(errorProduct());
//     }

// }

