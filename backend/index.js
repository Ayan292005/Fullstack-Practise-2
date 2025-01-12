const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.ConnectionString)
.then(()=>{
    console.log("connected")
})


app.listen(5000,()=>{
    console.log("bu app 5000 portunda dinlenilir")
})


let ProductSchema = new mongoose.Schema({
    image:String,
    country:String,
    title:String,
    description:String
   
})

let ProductModel= mongoose.model("team",ProductSchema)


app.get("/team", async (req,res)=>{
    let teams= await ProductModel.find()
    res.send(teams)
})

app.post("/team", async (req,res)=>{
    let newTeam= ProductModel(req.body)
   await newTeam.save()
   res.send({
     message:"Posted",
     data:req.body
   })
})

app.get("/team/:id",async (req,res)=>{
    let id=req.params.id
    let myTeam= await ProductModel.findById(id)
    res.send({
        message:"Success GetById",
        data:myTeam
    })
})


app.delete("/team/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"Deleted",
})
})