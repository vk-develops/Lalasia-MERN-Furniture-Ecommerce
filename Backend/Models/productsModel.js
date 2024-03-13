import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    type: [
        {
            type: String,
            required: true,
        },
    ],
    commonType: {
        type: String,
        default: "Unknown",
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    discountPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    starRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    imageUrls: [
        {
            type: String,
            required: true,
        },
    ],
    lastUpdated: {
        type: Date,
        required: true,
    },
});

//Creating product model
const Product = mongoose.model("Product", productSchema);

//Export
export default Product;

//discount, color, material, quantity
