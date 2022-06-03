const Category = require("../models/Categorie.model");

module.exports.categoryController = {
  createCategory: async (req, res) => {
    try {
      await Category.create({
        category: req.body.category,
      });
      res.json("Категория создана");
    } catch (err) {
      res.json(err.message);
    }
  },
  getCategories: async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  patchCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, {
        category: req.body.category,
      });
      res.json("Категория изменена");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (err) {
      res.json(err.message);
    }
  },
};
