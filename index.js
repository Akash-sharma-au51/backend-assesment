const cookieParser = require('cookie-parser')
const express = require('express')
const connection = require("./db.config")
require('dotenv').config()


const port = process.env.PORT


const app = express()

//middleare

app.use(cookieParser)



connection()

app.listen(port,()=>{
    console.log("app is running on",port)
})


