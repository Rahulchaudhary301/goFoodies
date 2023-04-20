const express=require('express')
const route=express.Router()
const user=require('../UserController/User')
const Food=require('../doodData/Fooddata')
const Order=require('../UserController/OrderData')




route.get('/g',function(req,res){
    res.send({status:true, msg:"Rahul avi jinda hai"})
})

route.post('/createFoodUser', user.CreatUser)

route.post('/UserLogin',user.LoginUser)

route.post('/CreateFood', Food.CreateFood)

route.get('/getAllFoodData', Food.GetFoodData)

route.get('/CreateCategory', Food.FoodCateguryy)

route.get('/getFoodCategory', Food.GetCategory)

route.post('/createOrder', Order.OrderCreate )

route.post('/getOrderData', Order.Orderdata )

module.exports=route