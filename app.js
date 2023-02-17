import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import { test } from "./controller/test.js";
import mongoose from "mongoose";
import productRouter from "./routes.js";
//h
const port = process.env.PORT;
const uriLocalhost = process.env.MONGO_URI;
//
app.use(express.json());
// routers
app.use(productRouter);
app.get("/", test);
//
const uri =
  "mongodb+srv://yonni:abcdabcd@cluster0.iadyil7.mongodb.net/?retryWrites=true&w=majority";
// to start the application
const appStart = async (port, uri) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
    console.log("db connection established");
    app.listen(port, () => {
      console.log(`Listing at http://localhost:${port} `);
    });
  } catch (err) {
    console.log("error occured", err);
  }
};
appStart(port, uriLocalhost);
