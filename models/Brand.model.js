const mongoose = require("mongoose");

const brandSchema = {
  name: String,
};

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;