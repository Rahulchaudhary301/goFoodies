const {default:mongoose}=require('mongoose')


const FoodCategury= new mongoose.Schema({
      CategoryName:{
        type:String,
        require:true,
        trim:true
      },
      
})

module.exports=mongoose.model('FoodCategury',FoodCategury)