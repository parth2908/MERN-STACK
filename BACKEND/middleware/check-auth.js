const jwt = require('jsonwebtoken')

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    try {
       
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
        throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log(decodedToken)
    req.userData = { userId: decodedToken.userId };
    next();
    } catch (err) {
        console.log(err)
        const error = new HttpError('Authentication failed!', 401);
        return next(error);
    }
    
};