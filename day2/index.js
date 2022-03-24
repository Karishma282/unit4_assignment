const express =require("express");
const app=express();
app.get("/users",function (req,res){
res.send("Hello")
});

app.get("/books",function(req,res){
    res.send({Belive_in_yourself:"Confidence comes from within, and you can find ways to believe in yourself at any time",
              Harry_potter:" The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
            One_day_life_will_change:" The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
            Because_life_is_best:"Confidence comes from within, and you can find ways to believe in yourself at any time"})
})
// app.listen(3000,()=>{
//     console.log("on port 3000") 
// })
app.listen(4000,()=>{
    console.log("on port 4000")
})

