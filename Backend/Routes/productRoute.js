import express from "express";

//Router init
const router = express.Router();

//HTTP Methods
router.get("/get-all-products");
router.get("get-related-product/:type");

//Export
export default router;

// http://localhost:8080/api/v1/furniture/products/
