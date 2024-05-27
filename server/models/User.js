const {Schema, model} = require('mongoose')


const User = new Schema({
    username: {type:String, unique:true, required:true},
    password: {type:String, required:true},
    roles:[{type: String, ref:'Role'}],
    history:[{type:Schema.Types.ObjectId , ref :'Order'}]
})
module.exports = model('User', User)


// {
//  id
//  name
//  checked: fal
// 
// }