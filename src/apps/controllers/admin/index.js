const mongoose = require("mongoose");

const Category = mongoose.model("Category");
const Product = mongoose.model("Product");

module.exports.dashboard = async function (req, res) {
  // Product.find((err, products) => {
  // Category.find((err, categories) => {
  // // console.log("Category", data);
  // res.render("admin/pages/dashboard", { data: { products, categories } });
  // });
  // });

  // const products = await Product.find();
  // const categories = await Category.find();

  await Product.deleteMany({
    _id: { $in: ["5ec6844a64db9230e57f8e36", "5ec684afc9a69d376669a75d"] },
  });

  res.render("admin/pages/dashboard", { data: {} });
};

module.exports.login = function (req, res) {
  res.render("admin/pages/login", { error: "" });
};
module.exports.postLogin = function (req, res) {
  const email = req.body.mail;
  const pass = req.body.pass;

  if (email === "abc@gmail.com" && pass === "123456") {
    return res.redirect("/admin/dashboard");
  }

  res.render("admin/pages/login", {
    error: "Tài khoản không hợp lệ",
  });
};
