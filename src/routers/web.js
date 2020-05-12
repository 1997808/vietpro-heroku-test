const { Router } = require("express");

const { AdminController } = require("../apps/controllers");
// const AdminController = require()
// const userController = require("../apps/controllers/admin/user.controller");

const router = Router();

// router.get("/", userController.login);

router.get("/admin/dashboard", AdminController.dashboard);

// router.get("/form", function (req, res) {
// res.render("test/form", { username: "" });
// });

// router.post("/form", function (req, res) {
// // return res.redirect("/");
// res.render("test/form", { username: req.body.username });
// });

module.exports = router;
