const Brand = require("../models/Brand.model");

module.exports.brandController = {
  postBrand: async (req, res) => {
    try {
      await Brand.create({
        name: req.body.name,
      });
      res.json("Бренд создан");
    } catch (err) {
      res.json(err.message);
    }
  },

  getBrands: async (req, res) => {
    try {
      const data = await Brand.find();
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },

  getBrandById: async (req, res) => {
    try {
      const data = await Brand.findById(req.params.id);
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteBrand: async (req, res) => {
    try {
      await Brand.findByIdAndRemove(req.params.id);
      res.json("Бренд удален");
    } catch (err) {
      res.json(err.message);
    }
  },

  patchBrand: async (req, res) => {
    try {
      await Brand.findByIdAndUpdate({
        name: req.body.name,
      });
      res.json("Бренд изменен");
    } catch (err) {
      res.json(err.message);
    }
  },
};