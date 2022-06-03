const { Router } = require("express")
const { brandController } = require("../controllers/brand.controllers")
const router = Router()

router.get("/user/brands", brandController.getBrands)
router.get("/user/brands/:id", brandController.getBrandById)
router.post("/admin/brands", brandController.postBrand)
router.delete("/admin/brands/:id", brandController.deleteBrand)
router.patch("/admin/brands/:id", brandController.patchBrand)

module.exports = router;