//no sql database
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
app.use('/',productRouter);
app.use('/',orderRouter);
connect()
//model




app.listen(5000,()=>{
console.log('server running')
})