import asyncHandler from "express-async-handler";
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
export { getAllProducts, getRelatedProducts };
