const { Router } = require("express");

const { cartControllers } = require("../controllers/cart.controllers");

const router = Router();

router.post("/user/cart", cartControllers.createCart);
router.patch("/user/cart/pushProduct/:id", cartControllers.pushProduct);
router.patch("/user/cart/deleteProduct/:id", cartControllers.deleteProduct);
router.get("/user/cart", cartControllers.getCart);
router.delete("/user/cart/:id", cartControllers.deleteCart);

module.exports = router;
