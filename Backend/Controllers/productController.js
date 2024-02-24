import asyncHandler from "express-async-handler";
import Product from "../Models/productsModel";

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

//Export
export { getAllProducts };
