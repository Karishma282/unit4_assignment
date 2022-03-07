const express=require("express");
const app=express();
app.use(logger)

app.get("/books",(req,res)=>{
    console.log("Books")
return res.send({ route:"/books"})
})
app.use(checkPermission)

app.get("/libraries",(req,res)=>{
    return res.send({ route: "/libraries", permission: true})
})
app.get("/authors",(req,res)=>{
    return res.send({ route: "/authors", permission: true})
})

function logger(req,res,next){
    console.log("Before route handler")
    next();
    console.log("After route handler")
}

function checkPermission(req,res,next)
{
    if("/libraries"){
        console.log("librarian")
    }
    else if("/authors"){
        console.log("authors")
    }
    next();
}

app.listen(2900,()=>{
    console.log("on port 2900")
})

