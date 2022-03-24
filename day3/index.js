const express=require("express");
const app=express();
const allBooks=(req,res,next)=>{
    console.log("fetching books");
    next();
}

app.get("/books",allBooks,(req,res)=>{
    return res.send("allBooks");
})

const singleBook=(req,res,next)=>{
    req.name=req.param.name;
    next();
}

app.get("/book/:name",singleBook,(req,res)=>{
    return res.send({"BookName":req.params.name})
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Running")
})