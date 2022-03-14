const mongoose=require("mongoose")


const fixedSchema=mongoose.Schema({
    account_number:{type:Number,require:true},
    balance:{type:Number,require:true},
    intrestRate:{type:Number,require:true},
    startDate:{type:Number,require:true},
    maturityType:{type:Number,require:true},

},
{
    versionKey:false,
    timeStamps:true,
})

const fixed=mongoose.model("fixed",fixedSchema)
module.exports=fixed;
