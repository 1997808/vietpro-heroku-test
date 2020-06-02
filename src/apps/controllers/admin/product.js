const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports.index = async function (req, res) {
  const products = await Product.find().populate("cat").populate("cat_id");
  console.log("products", products);

  res.render("admin/pages/products/index", { products });
};
