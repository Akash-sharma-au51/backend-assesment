const cookieParser = require('cookie-parser')
const express = require('express')
const connection = require("./db.config")
require('dotenv').config()
const userRoute = require("./routes/userRoutes")
const bookRoute = require("./routes/bookRouter")
const borrowRoute = require("./routes/borrowRouter")


const port = process.env.PORT


const app = express()


//api 

app.use("/user",userRoute)
app.use("/books",bookRoute)
app.use("/borrow",borrowRoute)

//middleare

app.use(cookieParser)



connection()

app.listen(port,()=>{
    console.log("app is running on",port)
})


