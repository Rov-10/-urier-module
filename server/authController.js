const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('./config')

const generateAccessToken=({_id, username, roles, history})=>{
    const payload = {
        _id,
        username,
        roles,
        history
    }
    // console.log(roles)
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}
class authController{
    async registration(req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Registration error", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({massage: 'User with this username already exists'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value:"USER"})
            const user = await User.create({username, password:hashPassword, roles:[userRole.value]})
            return res.status(200).json({message: 'New user sucsessfuly created!'})
        } catch (error) {
            console.log(error)
            res.status(400).json({massage: 'Registration error'})
        }
    }
    async login(req, res){
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message:`User with name: ${username} not found`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword){
                return res.status(400).json({message:"Incorect username or password"})
            }
            // console.log(user.toObject())
            const token = generateAccessToken(user)
            return res.json({token})

        } catch (error) {
            console.log(error)
        res.status(400).json({massage: 'Login error'})
        }
    }
    async getUsers(req, res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            
        }
    }
    async check(req, res) {
        try {
            // console.log("check")
            const token = generateAccessToken(req.user);
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500);
        }
    }
    async toActiveOrder(req,res){
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized access' });
              }
            const userId = req.user._id;
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.history.push(req.body._id)
            user.save()
            // console.log(req.body._id , user)
            const token = generateAccessToken(user)
            return res.json({token})
        } catch (error) {
            
        }
    }
    // async getOrderHistory(req,res){
    //     try {
    //         const userId = req.user._id;
    //         console.log(userId)
    //         const user = await User.findById(userId)
    //         console.log(user)
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         console.log(user.history)
    //         return user.history
    //     } catch (error) {
            
    //     }

    // }
}

module.exports = new authController()