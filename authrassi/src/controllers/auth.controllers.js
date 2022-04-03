const user=require("../models/user.models")
const jwt=require('jsonwebtoken')
const User = require("../models/user.models")
require('dotenv').config()

const generationToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY)

}

const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({message:"Email already exists"})
        }

        user=await user.create(req.body);

        const token=generationToken(user);
        return res.status(200).send({user,token})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email}) 
        if(!user){
            return res.status(400).send("Wrong EMail or password")
        } 
        const match=user.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"Wrong Email or password"})
        }
        const token=generationToken(user)
        return res.status(200).send({user,token});
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}



module.exports={register,login}