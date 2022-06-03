const { Router } = require("express");

const { reviewControllers } = require("../controllers/review.controllers");

const router = Router();

router.post("/user/review", reviewControllers.creteReview);
router.get("/user/review", reviewControllers.getReview);
router.delete("/user/review/:id", reviewControllers.deleteReview);
router.patch("/user/review/:id", reviewControllers.updateReview);
router.get("user/review/product/:id", reviewControllers.getReviewByProduct);

module.exports = router;
