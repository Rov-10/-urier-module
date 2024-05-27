const Router = require("express")
const router = new Router()
const controller = require('./orderController')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/createOrder', roleMiddleware(["ADMIN"]), controller.createOrder)
router.get('/getOrders',authMiddleware,controller.getOrders)
router.put('/acceptOrder',authMiddleware,controller.acceptOrder)
router.put('/completeOrder',authMiddleware,controller.completeOrder)
router.get('/getActiveOrders',authMiddleware, controller.getActiveOrders)



module.exports = router

