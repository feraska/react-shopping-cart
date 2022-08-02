const mongoose=require('mongoose')
const connectString = 'mongodb://localhost:27017/react-shopping-cart'
const runDB=()=>{
mongoose.connect(connectString)
.then(res=>console.log("connected successfully"))
.catch(err=>console.log(err))
}
module.exports=runDB