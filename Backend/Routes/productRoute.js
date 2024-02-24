import express from "express";
import { getAllProducts } from "../Controllers/productController";

//Router init
const router = express.Router();

//HTTP Methods
router.get("/get-all-products", getAllProducts);
router.get("get-related-product/:type");

//Export
export default router;

// http://localhost:8080/api/v1/furniture/products/
