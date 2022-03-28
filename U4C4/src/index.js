const express=require("express");

const connect=require("./configs/db")
const userController=require("./controllers/user.controllers");
const todoController=require("./controllers/todo.controllers");
const app=express();
app.use(express.json())
app.use("./todos",todoController)l
app.use("user",userController)

 app.listen(4000, async()=>{
     try {
         await connect();
         console.log("listening on port 4000")
     } catch (error) {
         console.log(error)
     }
 })