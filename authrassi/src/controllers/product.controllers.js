const express=require("express");

const router=express.Router();

const authenticate =require("../middlewares/authenticate")
const Product=require("../models/product.models")

router.post("",authenticate,async(req,res)=>{
    req.body.user_id=req.user_ID;
    try {
        const product=await Product.create(req.body);
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})


router.get("", async(req,res)=>{
 try {
     const product=await Product.find()
     return res.status(200).send(product)
 } catch (error) {
     return res.status(400).send({message:error.message})
 }
})

module.exports=router;