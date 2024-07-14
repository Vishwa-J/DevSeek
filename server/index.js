import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

const  app=express();
dotenv.config();
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Devseek is running perfect");
})

const PORT=process.env.PORT||5000
const database_url="mongodb+srv://admin:vishwa123@devseek.j4slhw9.mongodb.net/?retryWrites=true&w=majority&appName=Devseek"

mongoose.connect(database_url)
.then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))