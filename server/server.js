//no sql database
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const router=require('./Routes/Routes');
app.use('/',router);
const connectString = 'mongodb://localhost:27017/react-shopping-cart'
mongoose.connect(connectString)
.then(res=>console.log("connected successfully"))
.catch(err=>console.log(err))
//model



app.listen(5000,()=>{
console.log('server running')
})