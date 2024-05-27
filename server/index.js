
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const authRouter = require('./authRouter.js')
const orderRouter = require('./orderRouter.js')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())
app.use('/auth',authRouter)
app.use('/order',orderRouter)


const start = async()=>{
    await mongoose.connect(`mongodb+srv://chipilla88:L55KclS6rwVrlBqp@deliveryservicedb.l2wrawd.mongodb.net/?retryWrites=true&w=majority&appName=DeliveryServiceDB`)
    try {
        app.listen(PORT, ()=>console.log(`server started on port:${PORT}`))
    } catch (error) {
        console.log(error) 
    }

}
start()

