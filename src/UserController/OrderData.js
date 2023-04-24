const Order=require('../UserSchema/OrderModel')




const OrderCreate= async function(req,res){

    try{
        let data = req.body.order_data
        await data.splice(0,0,{Order_date:req.body.order_date})
        let existdata= await Order.findOne({ 'email': req.body.email })
       
    if(existdata===null) {
        const resul=  await Order.create({ email: req.body.email, order_data:[data]})
        return  res.status(201).send({ status: true, data: resul});
    } 
    const result= await Order.findOneAndUpdate({email:req.body.email},{ $push:{order_data: data} })
 
    res.status(201).send({ status: true, data: result});
    

    }
    catch (err) {
        res.status(500).send({ status: false, mag: err.message });
    }
}





const Orderdata= async function(req,res){

    try{
        let email = req.body.email
       
    const result= await Order.findOne({email:email})
    
    res.status(201).send({ status: true, data: result});
    

    }
    catch (err) {
        res.status(500).send({ status: false, mag: err.message });
    }
}









module.exports={OrderCreate ,Orderdata}