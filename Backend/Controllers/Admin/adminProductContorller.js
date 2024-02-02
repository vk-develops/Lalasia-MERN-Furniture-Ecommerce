import asyncHandler from "express-async-handler";

// @desc    Get all the list of the products
// @route   GET /api/v1/admin/products/get-all-products
// @access  Private
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Products data retrieval success",
        });
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
        res.status(200).json({
            success: true,
            message: "Product created successfully",
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
export { getAllProducts, createProduct, updateProduct, deleteProduct };
