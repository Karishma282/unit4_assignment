const mongoose=require("mongoose")


const fixedSchema=mongoose.Schema({
    balance:{type:Number,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"User",require:true},
    branch_id:{type:mongoose.Schema.Types.ObjectId,ref:"Branch",require:true},
    

},
{
    versionKey:false,
    timeStamps:true,
})

const master=mongoose.model("fixed",masterSchema)
module.exports=master;