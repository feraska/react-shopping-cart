const  mongoose  = require("mongoose")

const UserSchma=new mongoose.Schema(
    {
        email:{
            type:String,
            unique:true,
            dropDups: true,
            required : true
        },
        password:{
            type:String,
            required : true
        },
        firstName:{
            type:String
        },
        lastName:{
            type:String
        }

        }
)
module.exports=UserSchma
  
