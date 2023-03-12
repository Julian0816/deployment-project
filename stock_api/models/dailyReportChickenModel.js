const mongoose = require('mongoose')

const DailyReportChickenSchema = mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Restaurant'
    },
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
        required: [true, "Please add the number of chicken thighs currently in stock"]
    },
},
{
    timestamps: true
});

module.exports = mongoose.model("ChickenProducts", DailyReportChickenSchema);