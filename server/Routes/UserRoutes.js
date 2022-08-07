const User=require('../models/UserModel')
const express=require('express');
const router=express.Router();
router.post('/api/register',async(req,res)=>{
    try{
   const user= new User(req.body);
   await user.save();
   res.send({"status":"ok"});
    }
    catch(e){
        res.send({"status":"error"});
    }
})
router.post('/api/user/name',async(req,res)=>{
    const{email}=req.body;
    const user=await User.find({email:email}).select({"firstName":1,"lastName":1});
    console.log(user)
    res.send(user);
})
router.post('/api/user',async(req,res)=>{
    try{
        const{email,password}=req.body;
        console.log(password)
        const user=await User.find({email:email,password:password});
     //   console.log(req.body)
       // console.log(user)
      //  console.log(email)
        if(user.length==1){
        res.send({"status":"ok"})
       // console.log(user)
        }
       else{
            res.send({"status":"error"})
        }
        }
        catch(e){
            res.send({"status":"error"})
        }
 })
//  router.get('/api/user',async(req,res)=>{
//     try{
//     const{email,password}=req.body;
//     const user=await User.find({"email":email,"password":password});
    
//     res.send({"status":"ok"})
//     }
//     catch(e){
//         res.send({"status":"error"})
//     }
    
//  })

module.exports=router;