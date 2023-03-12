const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Restaurant = require('../models/restaurantModel');


// @desc    Register new restaurant
// @route   Post /api/restaurants
// @access  Public
const registerRestaurant = asyncHandler(async (req, res) => {
    
    //Check if all fields are provided
    const {name, email, password} = req.body

    if( !name || !email || !password ) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    //Check if restaurant exists
    const restaurantExists = await Restaurant.findOne({ email })

    if(restaurantExists) {
        res.status(400)
        throw new Error('Restaurant already exists')
    }
    
    // --- Hash password ---
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create restaurant
    const restaurant = await Restaurant.create({
        name,
        email,
        password: hashedPassword
    })

    if(restaurant) {
        res.status(201).json({
          _id: restaurant.id,
          name: restaurant.name,
          email: restaurant.email,
          token: generateToken(restaurant._id),
        });
    } else {
        res.status(400)
        throw new Error('Invalid restaurant data')
    }
})



// @desc    Authenticate a restaurant
// @route   Post /api/restaurants/login
// @access  Public
const loginRestaurant = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    //Check for restaurant email
    const restaurant =  await Restaurant.findOne({email})

    if (restaurant && (await bcrypt.compare(password, restaurant.password))) {
        res.json({
          _id: restaurant.id,
          name: restaurant.name,
          email: restaurant.email,
          token: generateToken(restaurant._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
});



// @desc    Get restaurant data
// @route   Post /api/restaurants/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.restaurant.id)
});

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });
}

module.exports = {
  registerRestaurant,
  loginRestaurant,
  getMe,
};