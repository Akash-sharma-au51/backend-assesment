const User = require("../model/userModel")


const authorize = (req,res,next)=>{
    const userId = req.userId
    const role = req.role
    if (!userId) {
        res.status(400).json({message:"invalid user please login again"})
        
    }
    if (role!=='ADMIN') {
        rss.status(401).json({
            message:"unauthourized user"
        })
        
    }
    next()
}
module.exports = authorize
