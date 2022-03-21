const express=require("express");
const userController=require("./controllers/user.controllers");
const bookController=require("./controllers/book.controllers")

const app=express();
app.use(express.json());

const connect=require("./configs/db")

app.listen(3000,async function(){
    try {
        await connect();
        console.log("listening on port 3000")
    } catch (error) {
        console.log(error.message)
    }
})


module.exports=app;