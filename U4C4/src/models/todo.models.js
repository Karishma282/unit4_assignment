const mongoose=require("express");

const todoSchema=new mongoose.Schema({
    title:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true,
}
)


const Todo=mongoose.model("todo",todoSchema);
module.exports=Todo;