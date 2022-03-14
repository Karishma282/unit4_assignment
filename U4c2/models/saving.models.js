const mongoose=require("mongoose")

const savingSchema=mongoose.Schema({
    account_number:{type:Number,require:true},
    balance:{type:Number,require:true},
    addres:{type:String,require:true},
    interestRate :{type:Number,require:true},
    
},
{
   versionKey:false,
   timestamps:true,
})

const saving=mongoose.model("saving",savingSchema);
module.exports=saving;