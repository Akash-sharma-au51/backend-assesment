const Borrow = require('../model/borrowModel'); 


// Create a new borrowing record
const createBorrowRecord = async (req, res) => {
    try {
        const borrowRecord = new Borrow(req.body);
        await borrowRecord.save();
        res.status(201).json(borrowRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all borrowing records
const getAllBorrowRecords = async (req, res) => {
    try {
        const borrowRecords = await Borrow.find().populate('userId').populate('bookId');
        res.status(200).json(borrowRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a borrowing record by ID
const getBorrowRecordById = async (req, res) => {
    try {
        const borrowRecord = await Borrow.findById(req.params.id).populate('userId').populate('bookId');
        if (!borrowRecord) {
            return res.status(404).json({ message: 'Borrowing record not found' });
        }
        res.status(200).json(borrowRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a borrowing record
const updateBorrowRecord = async (req, res) => {
    try {
        const borrowRecord = await Borrow.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('userId').populate('bookId');
        if (!borrowRecord) {
            return res.status(404).json({ message: 'Borrowing record not found' });
        }
        res.status(200).json(borrowRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a borrowing record
const deleteBorrowRecord = async (req, res) => {
    try {
        const borrowRecord = await Borrow.findByIdAndDelete(req.params.id);
        if (!borrowRecord) {
            return res.status(404).json({ message: 'Borrowing record not found' });
        }
        res.status(200).json({ message: 'Borrowing record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// getting most borrowed books
const getMostBorrowedBooks = async (req, res) => {
    try {
        const mostBorrowedBooks = await Borrow.aggregate([
            { $match: { active: true } }, // Only count active borrow records
            { $group: { _id: "$bookId", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }, 
            { $lookup: { from: 'books', localField: '_id', foreignField: '_id', as: 'book' } },
            { $unwind: "$book" },
            { $project: { _id: 0, bookId: "$_id", bookName: "$book.book_name", count: 1 } }
        ]);

        res.status(200).json(mostBorrowedBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {createBorrowRecord,getAllBorrowRecords,getBorrowRecordById,updateBorrowRecord,deleteBorrowRecord,getMostBorrowedBooks}

