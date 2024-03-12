import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Product from "../Models/productsModel.js";

// @desc    Get all the products
// @route   GET /api/v1/furniture/products/get-all-products
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find();

        //Finding the product count
        const productsCount = await Product.countDocuments();

        if (products) {
            //Sending the response
            res.status(200).json({
                success: true,
                message: "Products data retrieval success",
                count: productsCount,
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

// @desc    Search all the products
// @route   GET /api/v1/furniture/products/search-products
// @access  Public
const searchProducts = asyncHandler(async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = 3;
        const skip = (page - 1) * perPage;

        const searchCriteria = {};

        if (req.query.search && req.query.search.trim() !== "") {
            searchCriteria.name = new RegExp(req.query.search.trim(), "i");
        }

        if (req.query.type) {
            searchCriteria.type = req.query.type;
        }

        if (req.query.color) {
            searchCriteria.color = req.query.color;
        }

        if (req.query.budget) {
            searchCriteria.price = {
                $lte: parseInt(req.query.budget),
            };
        }

        if (req.query.discount === "true") {
            searchCriteria.discountPercentage = { $gt: 0 };
        }

        const products = await Product.find(searchCriteria)
            .skip(skip)
            .limit(perPage)
            .exec();

        const productCount = await Product.countDocuments(
            searchCriteria
        ).exec();

        const totalPages = Math.ceil(productCount / perPage);

        if (products) {
            res.status(200).json({
                success: true,
                count: productCount,
                data: products,
                pagination: {
                    page: page,
                    perPage: perPage,
                    totalPages: totalPages,
                },
            });
        } else {
            res.status(400).json({
                success: false,
                message: "No products found",
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Get the list of a product
// @route   GET /api/v1/admin/products/get-a-product/:id
// @access  Public
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

// @desc    Get all the products by the type
// @route   GET /api/v1/furniture/products/get-related-products
// @access  Public
const getRelatedProducts = asyncHandler(async (req, res) => {
    try {
        const { type, id } = req.params;

        //Capitalizing the type
        const productType = type.charAt(0).toUpperCase() + type.slice(1);

        //Check for valid params
        if (!type) {
            return res
                .status(400)
                .json({ success: false, message: "No params recieved" });
        }

        //finding related product based on the type
        const relatedProducts = await Product.find({
            type: productType,
            _id: { $ne: id },
        });
        if (relatedProducts.length > 0) {
            //Sending the response
            res.status(200).json({
                success: true,
                message: "Related products retireved",
                data: relatedProducts,
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

//Export
export { getAllProducts, getRelatedProducts, getAProduct, searchProducts };
