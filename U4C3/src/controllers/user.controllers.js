const express=require("express");

const User=require("../models/user.models");

const upload=require("..middleware/uploads");
const router=express.Router();

router.post("firstName")
.trim()
.not()
.isEmpty()
.withMessage("First name must be min 3 and  max length 30 ");

router.post("lastName")
.trim()
.not()
.isEmpty()
.withMessage("Last name must be min 3 and  max length 30 ");



router.post("age")
.not()
.isEmpty()
.withMessage("First name must be min 3 and  max length 30 ")
.isNumeric()
.withMessage("age must be number 1 to 150 ")
.custom((val)=>{
    if(val < 1  || val > 150)
    {
        throw new Error("incorrect age provided")
    }
    return true
})



router.post("/multiple", upload.any("profileImages"),async(req,res)=>{
      try {
          const filePaths=req.files.map((file)=>{
              return file.path;
          });

          const user=await User.create({
              firstName:req.body.firstName,
              profileImages:filePaths,
          })

          return res.status(200).send(user);
      } catch (error) {
          return res.status(500).send({message:error.message})
      }
});

module.exports=router;