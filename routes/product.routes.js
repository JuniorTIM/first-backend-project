const { Router } = require("express");
const { productController } = require("../controllers/product.controllers");
const router = Router();

router.post("/admin/products", productController.createProduct);
router.patch("/admin/products", productController.patchProduct);
router.delete("/admin/products", productController.deleteProduct);
router.get(
  "/users/products/categories/:id",
  productController.getProductsByCat
);
router.get("/users/products/brands/:id", productController.getProdyctByBrand);
router.get("/users/products", productController.getProducts);

module.exports = router;
