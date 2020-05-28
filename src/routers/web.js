const { Router } = require("express");

const { AdminController, ProductController } = require("../apps/controllers");
const router = Router();

router.get("/admin/dashboard", AdminController.dashboard);

router
  .route("/login")
  .get(AdminController.login)
  .post(AdminController.postLogin);

router.get("/admin/products", ProductController.index);

module.exports = router;
