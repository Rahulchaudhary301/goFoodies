const express=require('express')
const route=express.Router()
const user=require('../UserController/User')
const Food=require('../doodData/Fooddata')




route.get('/g',function(req,res){
    res.send({status:true, msg:"Rahul avi jinda hai"})
})

route.post('/createFoodUser', user.CreatUser)

route.post('/UserLogin',user.LoginUser)

route.post('/CreateFood', Food.CreateFood)

route.get('/getAllFoodData', Food.GetFoodData)

route.get('/CreateCategory', Food.FoodCateguryy)

route.get('/getFoodCategory', Food.GetCategory)

module.exports=route