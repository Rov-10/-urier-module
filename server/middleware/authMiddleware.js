const jwt = require('jsonwebtoken')
const {secret}= require('../config')
module.exports = function(req,res,next){
    if (req.method ==="OPTIONS"){
        next()
    }
    try {
        if (!req.headers || !req.headers.authorization) {
            return res.status(401).json({ message: 'Unauthorized' }); // Use 401 for missing authorization
          }
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(400).json({message:"User is not authorized"})    
        }
        const decodedData = jwt.verify(token, secret)
        req.user = decodedData
        
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({massage: "User is not authorized"})
    }
}