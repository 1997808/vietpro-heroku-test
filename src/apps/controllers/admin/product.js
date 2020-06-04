const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports.index = async function (req, res) {
  const page = parseInt(req.query.page);
  const limit = 1;

  const skip = (page - 1) * limit;

  const totalDocuments = await Product.find().countDocuments();

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

  const products = await Product.find()
    .populate("cat_id")
    .limit(limit)
    .skip(skip);

  res.render("admin/pages/products/index", {
    products,
    range: rangerForDot,
    page,
    totalPages,
  });
};
