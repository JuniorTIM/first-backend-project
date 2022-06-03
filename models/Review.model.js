const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  product: {
    ref: "product",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;