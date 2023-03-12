const express = require('express');
const router = express.Router();
const {
  registerRestaurant,
  loginRestaurant,
  getMe,
} = require("../handlers/restaurantHandler");


const { protect } = require('../middleware/authMiddleware')


router.post("/", registerRestaurant);
router.post("/login", loginRestaurant);
router.get('/me', protect, getMe)

module.exports = router