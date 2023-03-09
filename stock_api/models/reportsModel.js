const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    chickens: {
        type: Number,
        required: [true, "Please add the number of whole chickens currently in stock"]
    },
    chicken_fillets: {
        type: Number,
        required: [true, "Please add the number of chicken fillets currently in stock"]
    },
    wings: {
        type: Number,
        required: [true, "Please add the number of wings currently in stock"]
    },
    double_brest: {
        type: Number,
        required: [true, "Please add the number of double brest currently in stock"]
    },
    chicken_thighs: {
        type: Number,
        required: [true, "Please add the number of whole chickens currently in stock"]
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Report', reportSchema)