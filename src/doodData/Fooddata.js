const FoodData=require('../UserSchema/FoodSchema')
const FoodCate=require('../UserSchema/DataCategory')
const {
    isValidString,
    nameValidation,
    mobileValidation,
    isValidEmail,
    isValidPassword,
} = require("../validator/validation");


const CreateFood= async function(req,res){
    try{
     let input=req.body;

     const {CategoryName,name,img,description}=input

     if(!CategoryName && !name && !img  && !description) return res.status(400).send({status:false,msg:"All field is Mandetry"})

     if(!isValidString(CategoryName)) return res.status(400).send({status:false,msg:"Invalid Category NAme"})
     if(!isValidString(name)) return res.status(400).send({status:false,msg:"Invalid name"})
     if(!isValidString(description)) return res.status(400).send({status:false,msg:"Invalid description"})
     if(!isValidString(img)) return res.status(400).send({status:false,msg:"Invalid img link"})

    const data= await FoodData.create(input)
    res.status(201).send({status:true,data:data})
    }
    catch(err){
       res.status(500).send({status:false, msg:err.message})
    }
}

const GetFoodData= async function(req,res){
    try{
     
    const data= await FoodData.find()
    res.status(201).send({status:true,data:data})
    }
    catch(err){
       res.status(500).send({status:false, msg:err.message})
    }
}





const FoodCateguryy= async function(req,res){
    try{
     let input=req.body;
    const{CategoryName}=input
    if(!CategoryName) return res.status(400).send({status:false,msg:"CategoryName is Mandetry"})
    if(!isValidString(CategoryName)) return res.status(400).send({status:false,msg:"Invalid CategoryName"})
    const data= await FoodCate.create(input)
    res.status(201).send({status:true,data:data})
    }
    catch(err){
       res.status(500).send({status:false, msg:err.message})
    }
}




const GetCategory= async function(req,res){
    try{
     
    const data= await FoodCate.find()
    res.status(201).send({status:true,data:data})
    }
    catch(err){
       res.status(500).send({status:false, msg:err.message})
    }
}

module.exports={CreateFood,GetFoodData,FoodCateguryy , FoodCateguryy , GetCategory}