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
        type: String,
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
    material: [
        {
            type: String,
            required: true,
        },
    ],
    colors: [
        {
            type: String,
            required: true,
        },
    ],
    discounts: [
        {
            discountType: {
                type: String,
                enum: ["Percentage", "Fixed"],
            },
            value: {
                type: Number,
                min: 0,
            },
            startDate: {
                type: Date,
            },
            endDate: {
                type: Date,
            },
        },
    ],
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
