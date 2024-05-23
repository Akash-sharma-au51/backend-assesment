const {createBook,getAllBooks,getBookById,updateBook,deleteBook} = require("../controller/bookController")

const loginAuthorize = require("../middleware/authMiddleware")
const authourize = require("../middleware/authorize")
const express = require("express")

const router = express.Router()

router.post('/create',loginAuthorize,authourize,createBook)
router.get('/',loginAuthorize,authourize,getAllBooks)
router.get('/:id',loginAuthorize,authourize,getBookById)
router.put("/update/:id",loginAuthorize,authourize,updateBook)
router.delete('/delete/:id',loginAuthorize,authourize,deleteBook)

module.exports = router