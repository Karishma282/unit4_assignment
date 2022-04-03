

const express=require("express");
const connect=require("./configs/db");
const userController=require("./controllers/user.controllers")
const productController=require("./controllers/product.controllers")

const {register,login}=require("./controllers/auth.controllers")

const app=express();

app.use(express.json());

app.use("./users",userController)

app.post("./register",register)

app.post("./login",login)

app.use("/products",productController)

app.listen(5000,async()=>{
    try {
        await connect();
        console.log("listening on port 5000")
    } catch (error) {
       console.log({message:error.message}) 
    }
})