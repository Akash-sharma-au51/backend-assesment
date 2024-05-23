const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    batch: { type: String, required: false },
    token: { type: String, required: false },
    role: {
        type: String,
        default: "STUDENT",
        required: false,
        enum: ["STUDENT", "ADMIN", "TEACHER"]
    }
},{timestamps:true})

const User = mongoose.model('User',userSchema)
module.exports = User


