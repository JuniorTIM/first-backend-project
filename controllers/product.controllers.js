const res = require("express/lib/response");
const Product = require("../models/Product.model");

module.exports.productController = {
  createProduct: async (req, res) => {
    try {
      await Product.create({
        product: req.body.product,
        category: req.body.category,
        brand: req.body.category,
      });
      res.json("продукт удален");
    } catch (err) {
      res.json(err.message);
    }
  },
  getProducts: async (req, res) => {
    try {
      const data = await Product.find().populate("category").populate("brand");
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  getProductsByCat: async (req, res) => {
    try {
      const data = await Product.find({ category: req.params.id })
        .populate("category")
        .populate("brand");
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  getProdyctByBrand: async (req, res) => {
    try {
      const data = await Product.find({ brand: req.params.id })
        .populate("category")
        .populate("brand");
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.json("продукт удален");
    } catch (err) {
      res.json(err.message);
    }
  },
  patchProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, {
        product: req.body.product,
        category: req.body.category,
        brand: req.body.category,
      });
      res.json("Продукт изменен");
    } catch (err) {
      res.json(err.message);
    }
  },
};
