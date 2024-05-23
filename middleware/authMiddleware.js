const jwt = require("jsonwebtoken")
require('dotenv').config()
const utils = require('util')

const loginAuthorize = (req,res,next)=>{
    const authHeader = req.headers.authorization
    let token;
    if (authHeader&&authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        
    }
    if (!token) {
        
        return res.status(401).json({ message: "Authorization token is required" });
    }

    try {
        // Verify the token
        const decoded =  utils.promisify(jwt.verify(token, process.env.TOKEN_SECRET_KEY));
        console.log(decoded)
        
        req.body = decoded;
       
        next();
    } catch (error) {
        
        res.status(403).json({ message: "Invalid token" });
    }
};
module.exports = loginAuthorize
