const app=require("./index");
const connect=require("./configs/db");


app.listen(3500,async function(){
    try {
        await connect();
        console.log("on port 3500")
    } catch (error) {
        console.log(error.message)
    }
});