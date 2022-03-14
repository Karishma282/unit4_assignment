const express=require("express");
const app=express();

const connect=require("./config/db")

const userRoute=require("./routes/user.routes");
const branchRoute=require("./routes/branch.routes");
const masterRoute=require("./routes/master.routes");
const savingRoute=require("./routes/saving.routes");
const fixedRoute=require("./routes/fixed.routes");

app.use(express.json());
app.use("/user",userRoute);
app.use("/branch",branchRoute);
app.use("/master",masterRoute);
app.use("/saving",savingRoute);
app.use("/fixed",fixedRoute);


app.listen(2000,async()=>{
    try {
        await connect();
        console.log("listening on port 2000")
    } catch (error) {
        console.log("server down")
        
    }
})

