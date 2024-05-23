const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const borrowSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    purchaseDate: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
}, { timestamps: true });

const Borrow = mongoose.model('Borrow', borrowSchema);

module.exports = Borrow;
