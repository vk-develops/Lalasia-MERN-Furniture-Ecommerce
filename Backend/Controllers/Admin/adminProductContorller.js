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

        res.status(200).json({
            success: true,
            message: "Products data retrieval success",
            count: productCount,
            data: products,
        });
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
        const { name, subTitle, description, price, type, starRating } =
            req.body;

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
        res.status(200).json({
            success: true,
            message: "Product update done successfully",
        });
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
