require('dotenv').config()
const dotenv=require('dotenv')
const express=require('express')
const app=express()
const {default: mongoose} =require('mongoose')
const router=require('./router/router.js')
const cors=require('cors')
dotenv.config({path:'./config.env'})
app.use(express.json())

app.use(cors())

// app.use(cors({
//     origin:['http://localhost:3000','https://gofoodies.netlify.app/']
// }))

  
  mongoose.connect('mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/gotomearn?retryWrites=true&w=majority')
   .then(()=>{
    console.log("MongoDB is connected")
   
})
.catch((err)=>console.log(err.message))



app.use("/",router)


app.listen(process.env.PORT ||8000 , function (){
    console.log("app is listen on 8000 PORT")
})


