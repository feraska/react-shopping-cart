//no sql database
require('dotenv').config()
const connect=require('./config/db')
const express=require('express');
var cors = require('cors');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const productRouter=require('./Routes/ProductRoutes');
const orderRouter=require('./Routes/OrderRoutes');
const userRouter=require('./Routes/UserRoutes');
app.use('/',productRouter);
app.use('/',orderRouter);
app.use('/',userRouter);
connect()
//model
if(process.env.NODE_ENV==='production'){
    app.use('/',express.static('public'));
    app.get('/',(req,res)=>res.sendFile(__dirname+"/public/index.html"))
}
else{
    app.get('/',(req,res)=>res.send("API running"))
}



app.listen(process.env.PORT||5000,()=>{
console.log('server running')
})