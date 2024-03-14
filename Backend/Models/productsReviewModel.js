import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Review = new mongoose.model("Review", reviewSchema);

//Export
export default Review;