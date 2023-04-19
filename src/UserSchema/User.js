const {default:mongoose}=require('mongoose')


const UserSchema= new mongoose.Schema({
      name:{
        type:String,
        require:true,
        trim:true
      },
      location:{
        type:String,
        require:true,
        trim:true
      },
      email:{
        type:String,
        require:true,
        trim:true
      },
      password:{
        type:String,
        require:true,
        trim:true
      },
      date:{
        type:Date,
        default:Date.now
       
      }
},{timestamps:true})

module.exports=mongoose.model('Userdata',UserSchema)