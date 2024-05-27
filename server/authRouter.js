const Router = require("express")
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration',[check("username","Username can't be empty").notEmpty(), check("password","Passwoed must be from 4 to 10 characters").isLength({min:4,max:10})], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER']),controller.getUsers)
router.get('/', authMiddleware,controller.check)
router.put('/toActiveOrder', authMiddleware,controller.toActiveOrder)
// router.get('/getOrderHistory',authMiddleware,controller.getOrderHistory)

module.exports = router 