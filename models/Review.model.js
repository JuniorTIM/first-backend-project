const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  product: {
    ref: "Product",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review; 