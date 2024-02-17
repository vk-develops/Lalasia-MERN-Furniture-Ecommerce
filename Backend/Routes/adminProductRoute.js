import express from "express";
import multer from "multer";
import {
    createProduct,
    getAProduct,
    getAllProducts,
} from "../Controllers/Admin/adminProductContorller.js";
import { isAdmin, protect } from "../Middlewares/authMiddleware.js";

//Router init
const router = express.Router();

//Multer configurations
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },
});

//HTTP methods for app products
router.get("/get-all-products", protect, isAdmin, getAllProducts);
router.get("/get-a-product/:id", protect, isAdmin, getAProduct);
router.post(
    "/create-product",
    protect,
    isAdmin,
    upload.array("imageFiles", 6),
    createProduct
);
router.put("/update-product/:id");
router.delete("/delete-product/:id");

//Exports
export default router;

// http://localhost:8080/api/v1/admin/products/
