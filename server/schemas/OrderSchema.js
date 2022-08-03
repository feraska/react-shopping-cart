
const mongoose=require('mongoose')
const OrderSchema =new mongoose.Schema(
    {
    name:String,
    email:String,
    items:[Object]
    },
    {
    timestamps:true
}
)

module.exports=OrderSchema