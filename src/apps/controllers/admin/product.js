const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports.index = async function (req, res) {
  const products = await Product.find();

  res.render("admin/pages/products/index", { products });
};
