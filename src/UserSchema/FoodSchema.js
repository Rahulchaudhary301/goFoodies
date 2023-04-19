const {default:mongoose}=require('mongoose')



const FoodData= new mongoose.Schema({
    

    CategoryName:{
        type:String,
        require:true,
        trim:true

    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    img:{
        type:String,
        require:true,
        trim:true
    },
    options:[
        {
            half:Number,
            full:Number
        }
    ],
   
description:{
    type:String,
    require:true,
    trim:true

} 


},{timestamps:true})



module.exports=mongoose.model('Fooddata',FoodData)