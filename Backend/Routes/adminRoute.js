import express from "express";
import multer from "multer";

//Router init
const router = express.Router();

//Multer configurations
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //Image max size 5MB
    },
});

//HTTP methods for app products
router.get("/get-all-products");
router.post("/create-product", upload.array("imageFiles", 6));
router.patch("/update-product");
router.delete("/delete-product");

//HTTP methods for app blog posts
router.get("/get-all-posts");
router.post("/create-post");
router.patch("/update-post");
router.delete("/delete-post");

//HTTP methods for admin accessing users
router.get("/get-all-users");
router.delete("/delete-user");

//Exports
export default router;

// http://localhost:8080/api/v1/admin/products/
// http://localhost:8080/api/v1/admin/posts/
// http://localhost:8080/api/v1/admin/users/
