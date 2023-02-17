import express from "express";
import {
  createProducts,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "./controller/productsController.js";

const Router = express.Router();

Router.route("/products").post(createProducts);
Router.route("/products").get(getAllProducts);
Router.route("/products/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default Router;
