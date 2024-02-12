// Loads .env file contents into process.env by default
require('dotenv').config()
const  express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
const pfserver = express()
require('./DB/connection')

pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(router)
pfserver.use('/uploads',express.static('./uploads'))

const PORT = 3000

pfserver.listen(PORT,()=>{
    console.log(`Project fair started at port: ${PORT}`);
})

pfserver.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red;>Project Fair server started!!! Waiting for Client Request... </h1> ")
})