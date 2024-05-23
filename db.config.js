const mongoose = require('mongoose')
require('dotenv').config()

const connection = async ()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log("connected to Mongodb")
        
    } catch (error) {
        console.error("error connecteing to mongodb",error);
        
    }
}

module.exports = connection
