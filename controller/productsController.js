import { products } from "../model/products.js";

const createProducts = async (req, res) => {
  try {
    const getAllProducts = await products.create(req.body);
    res.status(201).json({
      status: "success",
      getAllProducts,
    });
  } catch (err) {
    console.log(err, "am error ...");
  }
};
//
const getAllProducts = async (req, res) => {
  const product = await products.find();
  if (!product) {
    res.status(404).json({ error: "product not found" });
  }
  res.status(201).json({
    status: "success",
    total: product.length,
    data: product,
  });
};
// console.log(req.query);
// find single product
const getSingleProduct = async (req, res) => {
  // req.params.id vs ?query
  const id = req.params.id;
  console.log(id);
  try {
    const singleProduct = await products.findById({ _id: id });
    res.status(201).json({
      status: "success",
      data: singleProduct,
    });
    console.log(req.params.id);
  } catch (err) {
    console.log(err, "error found");
  }
};
//udpdate data
const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updateProduct = await products.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      updateProduct,
    });
  } catch (err) {
    console.log(err);
  }
};
// deleting
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await products.findByIdAndDelete(
      { _id: id },
      req.body
    );
    res.status(200).json({ status: "delete successfully" });
  } catch (err) {
    console.log(err);
  }
};
export {
  createProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
