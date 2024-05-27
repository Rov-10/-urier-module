const Order = require ('./models/Order')
// const {validationResult} = require('express-validator')

class orderController {
    async createOrder(req, res){
        try {
            // console.log(req.body, 'creating...')
            const {order} = req.body
            const newOrder = await Order.create(order)
            if (newOrder){
                res.status(200).json({massage: 'Order created'})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({massage: 'Internal server error'})
        }
    }
    async getOrders(req, res){
        try {
            const orders = await Order.find({active:false, completed:false})
            res.json(orders)
            // console.log(orders)
        } catch (error) {
            res.json([])
        }
    }
    async acceptOrder(req,res){
        try{
            
            const order = await Order.findOneAndUpdate({_id:req.body._id}, {active:true}, {new:true})
            return res.json({_id:order._id})
        }
        catch(e){
           
        }
    }   
    async completeOrder(req,res){
        try{
            const order = await Order.findOneAndUpdate ({_id:req.body._id}, {completed:true}, {new:true})
            return res.json({_id:order._id})
        }
        catch(e){
           
        }
    }   
    async getActiveOrders(req,res){
        try {
            // console.log(req.query, 'req.query')

            const activeOrders = await Order.find({_id: {$in: req.query.arr}, completed:false});
            // console.log(activeOrders, 'activeOrders')
            return res.json({activeOrders})
        } catch (error) {
            
        }
    }
}

module.exports = new orderController()