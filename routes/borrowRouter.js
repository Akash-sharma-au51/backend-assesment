const {createBorrowRecord,getAllBorrowRecords,getBorrowRecordById,updateBorrowRecord,deleteBorrowRecord} = require("../controller/borrowController")
const loginAuthorize = require("../middleware/authMiddleware")
const authourize = require("../middleware/authorize")

const express = require("express")

const router = express.Router()

router.post("/create",loginAuthorize,authourize,createBorrowRecord)
router.get("/",loginAuthorize,authourize,getAllBorrowRecords)
router.get("/:id",loginAuthorize,authourize,getBorrowRecordById)
router.put('/update/:id',loginAuthorize,authourize,updateBorrowRecord)
router.delete("/delete/:id",loginAuthorize,authourize,deleteBorrowRecord)


module.exports = router
