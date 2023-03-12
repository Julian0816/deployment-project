const mongoose = require('mongoose')

//TODO Change user model to restaurant model and update the whole project

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model("Restaurant", restaurantSchema);
