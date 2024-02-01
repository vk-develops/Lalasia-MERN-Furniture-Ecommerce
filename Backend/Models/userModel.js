import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 8,
        required: true,
    },
    profileImg: {
        type: String,
    },
    about: {
        type: String,
    },
    phno: {
        type: String,
    },
    address: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User",
    },
});

//Creating user model
const User = mongoose.model("User", userSchema);

//Export
export default User;
