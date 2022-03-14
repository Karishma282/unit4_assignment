const mongoose=require("mongoose")

const branchSchema=mongoose.Schema({
   firstname:{type:String,require:true},
   middlename:{type:String,require:true},
   lastname:{type:String,require:true},
   age:{type:Number,require:true},
   email:{type:String,require:true},
    addres:{type:String,require:true},
    gender:{type:String,require:false,default:"female"},
    type:{type:String,require:true,default: "customer"}
},
{
   versionKey:false,
   timestamps:true,
})

const user=mongoose.model("user",userSchema);
module.exports=User;