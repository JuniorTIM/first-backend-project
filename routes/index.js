const { Router } = require("express");

const router = Router();

router.use(require("./brand.routes"));
router.use(require("./cart.routes"));
router.use(require("./categorie.routes"));
router.use(require("./product.routes"));
router.use(require("./review.routes"));
router.use(require("./user.routes"));

module.exports = router;
