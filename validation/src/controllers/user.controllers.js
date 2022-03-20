const express=require("express");
const {body,validationResult}=require("express-validator");

const User=require("../models/user.models");

const router=express.Router();


router.post(
    "/",
    //body('username).isEmail
    body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First name cannot be empty"),
    body("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("lastName cannot be empty"),
    body("email")
    .isEmail()
    .custom(async (value)=>{
        const user=await User.findOne({email:value});

        if(user)
        {
            throw new Error("Email is already taken");
        }
        return true;
    }),

    body("pincode")
    .trim()
    .not()
    .isEmpty()
    .withMessage("pincode cannot be empty")
    .isLength({min:6})
    .withMessage("pincode must be 6 characters"),

    body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 100")
    .custom((val)=>{
        if(val < 1 || val > 100)
        {
            throw new Error("Incorrect age provided");
        }
        return true;
    }),

    async (req,res)=>{
        try{
            console.log(body("firstName"));
            const errors=validationResult(req);
            console.log({errors});

            if(!errors.isEmpty()){
                return res.status(400).send({errors:errors.array()});

            }

            const user=await User.create(req.body);
            return res.status(201).send({user})
        }catch(err){
            return res.status(500).send({message:err.message});
        }
    });

    module.exports=router;