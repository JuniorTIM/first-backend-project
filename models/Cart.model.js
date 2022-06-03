const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: [
    {
      ref: "product",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
  user: 
    {
      ref: "user",
      type: mongoose.SchemaTypes.ObjectId,
    },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;