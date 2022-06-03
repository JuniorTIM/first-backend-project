const { Router } = require("express");
const router = Router();
const { userController } = require("../Controllers/user.controllers");

router.get("/user", userController.getUser);
router.post("/user", userController.postUser);
router.patch("/user/:id", userController.patchUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;