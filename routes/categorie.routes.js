const { Router } = require("express");
const { categoryController } = require("../controllers/categorie.controllers");
const router = Router();

router.post("/admin/categories", categoryController.createCategory);
router.get("/admin/categories", categoryController.getCategories);
router.patch("/admin/categories/:id", categoryController.patchCategory);
router.delete("/admin/categories/:id", categoryController.deleteCategory);
module.exports = router;
