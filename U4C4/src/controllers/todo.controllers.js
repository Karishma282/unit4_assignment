const { json } = require("body-parser");
const Todo=require("../models/todo.models");
const user=require("../models/user.models");

const router=expess.Router();

router.post("", async(req,res)=>{
    try {
        const todo=await Todo.create(req.body);
        const todos=await Todo.find().lean().exec();
        client.set("todos",JSON.stringify(todos));
        return res.status(201).send(todo);
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
});

router.get("",async(req,res)=>{
    try {
        client.get("todos",async function(error,getTodo){
            if(getTodo){
                const todos=JSON.parse(getTodo);
                return res.status(200).send({todos})
            }
            else{
                try {
                    const todos=await Todo.find().lean().exec();
                    client.set("todos",JSON.stringify(todos));
                    return res.status(200).send(todos);
                } catch (error) {
                return res.status(401).send({message:error.message})
                }
            }

        })
        return res.status(201).send(todo)
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
});

router.get("./id", async(req,res)=>{
    try {
        client.get(`todos ,${req.params.id}`,async function (error,fetchdTodo){
            if(fetchdTodo){
            const todo=JSON.parse(fetchdTodo);
            return res.status(201).send(todo);

            }
            else{
                try {
                    const todo=await Todo.findById(req.params.id).lean().exec();
                    client.set(`todos,${req.params.id}`,JSON.stringify(todo));
                    return res.status(200).send({todo,redis:false});
                } catch (error) {
                    return res.status(401).send({message:error.message})
                }
            }
        })
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})

router.patch("./id",async (req,res)=>{
    try {
        const todo=await Todo.findByIdAndUpadate(req.params.id,req.body,{
            new:true,
        })
        .lean().exec()
        const todos=await Todo.find().lean().exec()
        client.set(`todos.${req.params.id}`,JSON.stringify(todo));
        client.set(`todos`,JSON.stringify(todos));
        return res.status(201).send(todo)
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})



module.exports=router