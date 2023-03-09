const mongoose = require("mongoose");

const DailyKeyItemsSchema = mongoose.Schema(
  {
    sweet_potato_wedges: {
      type: Number,
      required: [
        true,
        "Please add the number of Sweet Potato Wedges currently in stock",
      ],
    },
    long_stem_broccoli_in_kg: {
      type: Number,
      required: [
        true,
        "Please add the number of Long Stem Broccoli currently in stock",
      ],
    },
    coleslaw_in_kg: {
      type: Number,
      required: [true, "Please add the number of Coleslaw currently in stock"],
    },
    corn_per_unit: {
      type: Number,
      required: [true, "Please add the number of Corn currently in stock"],
    },
    rice_in_kg: {
      type: Number,
      required: [true, "Please add the number of Rice currently in stock"],
    },
    mixed_olives_in_kg: {
      type: Number,
      required: [
        true,
        "Please add the number of Mixed Olives currently in stock",
      ],
    },
    chips_in_kg: {
      type: Number,
      required: [
        true,
        "Please add the number of Chips currently in stock",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("keyItems", DailyKeyItemsSchema);
