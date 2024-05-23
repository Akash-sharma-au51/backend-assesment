const mongoose = require('mongoose')

const returnSchema = new mongoose.Schema({
    userid:{type:Schema.types.ObjectId,ref:"user",required:true},
    bookId: { type: Schema.Types.ObjectId, ref: 'book', required: true },
    returDate: { type: Date, default: Date.now },
})

const Return = mongoose.model('Return',returnSchema)
module.exports = Return