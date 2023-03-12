const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Restaurant = require('../models/restaurantModel');

const protect = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token =  req.headers.authorization.split(' ')[1]

            //Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get restaurant from the token
            req.restaurant = await Restaurant.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorised')
        }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorised, no token");
    }
})

module.exports = { protect }