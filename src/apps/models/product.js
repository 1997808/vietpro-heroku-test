const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    cat_id: mongoose.Schema.ObjectId,
    prd_name: String,
    prd_image: String,
    prd_price: String,
    prd_warranty: String,
    prd_accessories: String,
    prd_new: String,
    prd_promotion: String,
    prd_status: Number,
    prd_featured: Number,
    prd_details: String,
  },
  {
    timestamps: true,
  }
);

mongoose.model("Product", ProductSchema, "products");
