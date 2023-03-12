const mongoose = require("mongoose");

const DailyDrinksSchema = mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurant",
    },
    cara_viva_rose: {
      type: Number,
      required: [
        true,
        "Please add the number of Cara viva rose currently in stock",
      ],
    },
    cara_viva_summer_fruit: {
      type: Number,
      required: [
        true,
        "Please add the number of cara viva summer fruit currently in stock",
      ],
    },
    freedom_pils: {
      type: Number,
      required: [
        true,
        "Please add the number of freedom pils currently in stock",
      ],
    },
    sagres: {
      type: Number,
      required: [true, "Please add the number of sagres currently in stock"],
    },
    spier_merlot_250ml: {
      type: Number,
      required: [
        true,
        "Please add the number of spier merlot 250ml currently in stock",
      ],
    },
    spier_rose_250ml: {
      type: Number,
      required: [
        true,
        "Please add the number of spier rose 250ml currently in stock",
      ],
    },
    spier_sauv_250ml: {
      type: Number,
      required: [
        true,
        "Please add the number of spier sauv 250ml currently in stock",
      ],
    },
    spier_sig_chard_250ml: {
      type: Number,
      required: [
        true,
        "Please add the number of spier sig chard 250ml currently in stock",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("drinks", DailyDrinksSchema);
