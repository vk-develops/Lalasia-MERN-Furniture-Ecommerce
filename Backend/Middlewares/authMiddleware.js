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

//Export
export { protect };
