import asyncHandler from "express-async-handler";
import { uploadImages } from "../../Helpers/uploadImages.js";
import Product from "../../Models/productsModel.js";
import mongoose from "mongoose";

// @desc    Get all the list of the products
// @route   GET /api/v1/admin/products/get-all-products
// @access  Private
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find();

        //Retreive count
        const productCount = await Product.countDocuments();

        if (products) {
            //Sending the response
            res.status(200).json({
                success: true,
                message: "Products data retrieval success",
                count: productCount,
                data: products,
            });
        } else {
            return res
                .status(400)
                .json({ success: false, message: "No products found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Get the list of a product
// @route   GET /api/v1/admin/products/get-a-product/:id
// @access  Private
const getAProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid product id" });
        }

        const product = await Product.findById(id);

        if (product) {
            //Sending the response
            res.status(200).json({
                success: true,
                message: "Product data retrieval success",
                data: product,
            });
        } else {
            return res
                .status(400)
                .json({ success: false, message: "No products found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Create a new product
// @route   POST /api/v1/admin/products/create-product
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
    try {
        //Getting fields from form body
        const {
            name,
            subTitle,
            description,
            price,
            starRating,
            commonType,
            color,
            quantity,
            // discounts,
        } = req.body;

        const typeArray = Object.entries(req.body)
            .filter(([key, value]) => value === "true")
            .map(([key, value]) => key);

        //Uploading the images to cloudinary
        const imageUrls = await uploadImages(req.files);

        //Creating a new product object
        const newProduct = {
            name,
            subTitle,
            description,
            price,
            type: typeArray,
            imageUrls,
            starRating,
            commonType,
            color,
            quantity,
            lastUpdated: new Date(),
        };

        //Adding the values to the product modal
        const product = new Product(newProduct);
        await product.save();

        //Sending success message
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Update the existing product
// @route   POST /api/v1/admin/products/update-product
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const {
            name,
            subTitle,
            description,
            price,
            starRating,
            commonType,
            quantity,
            color,
        } = req.body;

        //Check for vaild id
        if (!mongoose.isValidObjectId(id)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid product id" });
        }

        const product = await Product.findById(id);

        if (product) {
            //Updating the products with current value
            product.name = name || product.name;
            product.subTitle = subTitle || product.subTitle;
            product.description = description || product.description;
            product.price = price || product.price;
            product.starRating = starRating || product.starRating;
            product.commonType = commonType || product.commonType;
            product.color = color || product.color;
            product.quantity = quantity || product.quantity;

            const typeArray = Object.entries(req.body)
                .filter(([key, value]) => value === "true")
                .map(([key, value]) => key);

            product.type = typeArray || product.type;

            // Handle image updates and deletions
            if (req.files && req.files.length > 0) {
                const newImageUrls = await uploadImages(req.files);
                // Add new image URLs to the existing ones
                product.imageUrls.push(...newImageUrls);
            }

            if (req.body.deletedImageUrls) {
                // Parse the JSON string to an array
                const deletedImageUrls = JSON.parse(req.body.deletedImageUrls);
                if (Array.isArray(deletedImageUrls)) {
                    // Remove deleted image URLs from the product
                    deletedImageUrls.forEach((deletedImageUrl) => {
                        const index =
                            product.imageUrls.indexOf(deletedImageUrl);
                        if (index !== -1) {
                            product.imageUrls.splice(index, 1);
                        }
                    });
                } else {
                    console.error("deletedImageUrls is not an array");
                }
            }

            // Save the updated product
            const updatedProduct = await product.save();

            res.status(200).json({
                success: true,
                message: "Product update done successfully",
                data: updatedProduct,
            });
        } else {
            return res
                .status(400)
                .json({ success: false, message: "Product not found" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Delete the existing product
// @route   POST /api/v1/admin/products/delete-product
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        //Check for vaild id
        if (!mongoose.isValidObjectId(id)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid product id" });
        }

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res
                .status(404)
                .json({ success: false, message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product deletion was successfully done",
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

//Export
export {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
