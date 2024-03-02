import express from "express";
import {
    getAProduct,
    getAllProducts,
    getRelatedProducts,
    searchProducts,
} from "../Controllers/productController.js";

//Router init
const router = express.Router();

//HTTP Methods
router.get("/get-all-products", getAllProducts);
router.get("/search-products", searchProducts);
router.get("/get-a-product/:id", getAProduct);
router.get("/get-related-products/:id/:type", getRelatedProducts);

//Export
export default router;

// http://localhost:8080/api/v1/furniture/products/
