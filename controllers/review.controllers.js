const Review = require("../models/Review.model");

module.exports.reviewControllers = {
  creteReview: async (req, res) => {
    try {
      const review = await Review.create({
        user: req.body.user,
        text: req.body.text,
        product: req.body.product,
      });
      res.json(review);
    } catch (error) {
      res.json(error.message);
    }
  },
  getReview: async (req, res) => {
    try {
      const review = await Review.find();
      res.json(review);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      res.json("Отзыв удалён");
    } catch (error) {
      res.json(error);
    }
  },
  updateReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      });
      res.json("Отзыв изменен");
    } catch (error) {
      res.json(error.message);
    }
  },
  getReviewByProduct: async (req, res) => {
    try {
      const review = await Review.find({ product: req.params.id });
      res.json(review);
    } catch (error) {
      res.json(error.message);
    }
  },
};
