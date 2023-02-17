import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: [true, "please provide the title"],
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const products = mongoose.model("Product", productSchema);

export { products };
