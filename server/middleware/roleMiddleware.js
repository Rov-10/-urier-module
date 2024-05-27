const jwt = require('jsonwebtoken')
const {secret}= require('../config')
module.exports = function(roles){
    return function(req, res, next){
        if (req.method ==="OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(403).json({message:"User is not authorized"})    
            }
            // console.log(token) 
            const {roles: userRoles} = jwt.verify(token, secret)
            // console.log({roles})
            let hasRole = false
            userRoles.forEach(role => { if(roles.includes(role)){ hasRole = true } });
            if(!hasRole){
                return res.status(403).json({message:"Permition denied"})       
            }
            next()
        } catch (error) {
            console.log(error)
            return res.status(400).json({massage: "User is not authorized"})
        }
    }

}