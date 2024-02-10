import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    //Extracting the token from the cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            req.user = await User.findById(decoded.userId).select("-password");

            next();
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access, Invalid tokens.",
            });
        }
    } else {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access, No tokens.",
        });
    }
});

const isAdmin = async (req, res, next) => {
    const currentUser = req.user;

    //Check for is current loggedin user is admin or not
    if (currentUser.role === "Admin") {
        next();
    } else {
        return res.status(400).json({
            success: false,
            message: "Only admins can access this page",
        });
    }
};

//Export
export { protect, isAdmin };
