const Product=require('../models/ProductModel')
const express=require('express');
const router=express.Router();
router.get('/api/products',async(req,res)=>{
    const products=await Product.find();
    res.send(products);
    })
    router.post('/api/products/filterSize',async(req,res)=>{
        let products;
        let order=req.body.sort; 
        if(req.body.sizes!=="ALL"){
        
          
         products=await Product.find({"sizes":req.body.sizes});
       
        }
        else{
         products=await Product.find();
      //  res.send(products);
        }
        
       let newProduct=products.sort((a,b)=>{
            switch(order){
                case "lowest":
                return a.price-b.price;
                case "highest":
                return b.price-a.price;
                case "latest":
                return a.id<b.id?1:-1
            }
      
       })
        res.send(newProduct)
    })

   
    router.post('/api/products',async(req,res)=>{
        const newProduct=new Product(req.body)
        const saveP=await newProduct.save();
        res.send(saveP);
        })
        router.delete('/api/products/:id',async(req,res)=>{
            const deleteProduct=await Product.findById(req.params.id);
            res.send(deleteProduct);
            })
            module.exports=router;