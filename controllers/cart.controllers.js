const Cart = require("../models/Cart.model");

module.exports.cartControllers = {
  createCart: async (req, res) => {
    try {
      const cart = await Cart.create({ user: req.body.id });
      res.json(cart);
    } catch (error) {
      res.json(error.message);
    }
  },
  pushProduct: async (req, res) => {
    try {
      const cart = await Cart.findByIdAndUpdate(req.params.id, {
        $push: { product: req.body.product },
      });
      res.json("Товар добавлен в корзину");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        $pull: { product: req.body.product },
      });
      res.json("Товар удалён");
    } catch (error) {
      res.json(error.message);
    }
  },
  getCart: async (req, res) => {
    try {
      const cart = await Cart.find();
      res.json(cart);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndRemove(req.params.id);
      res.json("Корзина удалена");
    } catch (error) {
      res.json(error.message);
    }
  },
};
