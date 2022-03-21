const express=require("express");

const Book=require("../models/book.models");


const upload=require("..middleware/uploads");
const router=express.Router();



router.post("", upload.single("coverImages"),async(req,res)=>{
      try {
          const filePaths=req.files.map((file)=>{
              return file.path;
          });

          const user=await User.create({
              firstName:req.body.firstName,
              coverImages:filePaths,
          })

          return res.status(200).send(user);
      } catch (error) {
          return res.status(500).send({message:error.message})
      }
});

module.exports=router;