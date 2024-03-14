import express from "express";
import {
    createProductReview,
    getAProduct,
    getAllProducts,
    getProductReview,
    getRelatedProducts,
    searchProducts,
} from "../Controllers/productController.js";
import { protect } from "../Middlewares/authMiddleware.js";

//Router init
const router = express.Router();

//HTTP Methods
router.get("/get-all-products", getAllProducts);
router.get("/search-products", searchProducts);
router.get("/get-a-product/:id", getAProduct);
router.get("/get-related-products/:id/:type", getRelatedProducts);
router.post("/product-review/:id", protect, createProductReview);
router.get("get-product-review", getProductReview);

//Export
export default router;

// http://localhost:8080/api/v1/furniture/products/
