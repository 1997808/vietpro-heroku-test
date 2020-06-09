const { Router } = require("express");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/tmp");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    },
  }),
});

const { AdminController, ProductController } = require("../apps/controllers");
const router = Router();

router.get("/admin/dashboard", AdminController.dashboard);

router
  .route("/login")
  .get(AdminController.login)
  .post(AdminController.postLogin);

router.get("/admin/products", ProductController.index);

router
  .route("/admin/products/add")
  .get(ProductController.add)
  .post(upload.single("prd_image"), ProductController.store);

module.exports = router;
