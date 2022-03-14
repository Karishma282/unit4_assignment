const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://karishma282:<password>@cluster0.4udeq.mongodb.net/bank?retryWrites=true&w=majority")
}

module.exports=connect;