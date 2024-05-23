const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'book', required: true },
    purchaseDate: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
}, { timestamps: true });

const Borrow = mongoose.model('Borrow',borrowSchema)

module.exports = Borrow
