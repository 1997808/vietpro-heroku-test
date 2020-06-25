const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product");
const CategoryModel = mongoose.model("Category");

exports.home = async function (req, res) {
  const ProductFeatured = await ProductModel.find({ prd_featured: 1 })
    .limit(6)
    .sort("-_id");

  const ProductNew = await ProductModel.find().limit(6).sort("-_id");

  res.render("site/home", { ProductFeatured, ProductNew });
};

exports.productDetail = async function (req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("ID khong dung dinh dang");

  const product = await ProductModel.findById(id);

  if (!product) throw new Error("Không tìm thấy sản phẩm");

  res.render("site/product", { product });
};

exports.category = async function (req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("ID khong dung dinh dang");

  const category = await CategoryModel.findById(id);

  if (!category) throw new Error("Không tìm thấy sản phẩm");

  const page = parseInt(req.query.page || 1);
  const limit = 12;

  const skip = (page - 1) * limit;

  const totalDocuments = await ProductModel.find({
    cat_id: id,
  }).countDocuments();

  const totalPages = Math.ceil(totalDocuments / limit);
  const range = [];
  const rangerForDot = [];
  const detal = 1;

  const left = page - detal;
  const right = page + detal;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i <= right)) {
      range.push(i);
    }
  }

  let temp;
  range.map((i) => {
    if (temp) {
      if (i - temp === 2) {
        rangerForDot.push(i - 1);
      } else if (i - temp !== 1) {
        rangerForDot.push("...");
      }
    }
    temp = i;
    rangerForDot.push(i);
  });

  const products = await ProductModel.find({ cat_id: id })
    .sort("-_id")
    .limit(limit)
    .skip(skip);

  await res.render("site/category", {
    products,
    category,
    total: totalDocuments,
    range: rangerForDot,
    page,
    totalPages,
  });
};
