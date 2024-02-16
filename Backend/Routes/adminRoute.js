import express from "express";
import multer from "multer";
import { createProduct } from "../Controllers/Admin/adminProductContorller.js";
import { isAdmin, protect } from "../Middlewares/authMiddleware.js";

//Router init
const router = express.Router();

//Multer configurations
// const storage = multer.memoryStorage();
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024, //Image max size 5MB
//     },
// });

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },
});

// const upload = multer({ dest: "uploads/" });

//HTTP methods for app products
router.get("/get-all-products");
router.post(
    "/create-product",
    protect,
    isAdmin,
    upload.array("imageFiles", 6),
    createProduct
);
router.put("/update-product");
router.delete("/delete-product");

//HTTP methods for app blog posts
router.get("/get-all-posts");
router.post("/create-post");
router.put("/update-post");
router.delete("/delete-post");

//HTTP methods for admin accessing users
router.get("/get-all-users");
router.delete("/delete-user");

//Exports
export default router;

// http://localhost:8080/api/v1/admin/products/
// http://localhost:8080/api/v1/admin/posts/
// http://localhost:8080/api/v1/admin/users/
