const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product");

exports.home = async function (req, res) {
  const ProductFeatured = await ProductModel.find({ prd_featured: 1 })
    .limit(6)
    .sort("-_id");

  const ProductNew = await ProductModel.find().limit(6).sort("-_id");

  res.render("site/home", { ProductFeatured, ProductNew });
};
