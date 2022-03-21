const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://karishma282:karishma123@cluster0.4udeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}