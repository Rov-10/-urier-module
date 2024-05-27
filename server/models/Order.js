const {Schema, model} = require('mongoose')

const Order = new Schema({
    time: {type:String, default:new Date},
    place_name: {type:String, },
    adresses:{type:Array},
    cost:{type:Number},
    total:{type:Number},
    active:{type:Boolean},
    completed:{type:Boolean}

})
module.exports = model('Order', Order)