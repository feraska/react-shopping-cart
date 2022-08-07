const Order=require('../models/OrderModel')
const Product=require('../models/ProductModel')
const express=require('express');
const router=express.Router();

router.get('/api/orders/test',async(req,res)=>{
   const data=  Product.aggregate([
        
        {
             $group: {
                _id:{$eq:["$price",30]},
                 amount: { $count: {}},
                
                 } 
        }
            
     ])
    .exec((err,data)=>{
        if(err)
         console.log(err.message)
         res.send(data)
    })
    //res.send(data)
    
        
    

    
})
router.post('/api/orders/get',async(req,res)=>{
    console.log(req.body)
    const orders=await Order.find({email:req.body.email})
    console.log(orders)
    res.send(orders)
})
router.post('/api/orders',async(req,res)=>{
    const order=await new Order(req.body).save()
    res.send(order)
})
router.delete('/api/orders/:id',async(req,res)=>{
    const deleteOrder=await Order.findByIdAndDelete(req.params.id);
    res.send(deleteOrder);
    })
    module.exports=router