import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../Models/userModel.js";
import generateToken from "../Utils/generateToken.js";

// @desc    Register users & and get a token
// @route   POST /api/v1/users/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Check for all fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing fields, enter all fields.",
            });
        }

        //Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(409)
                .json({ success: false, message: "User already exists." });
        }

        //Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Storing the user details and password in the database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        //Functions after creating a user
        if (user) {
            //Generating a user token
            generateToken(res, user._id);

            res.status(201).json({
                success: true,
                message: "Account registration success.",
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Login users with a token
// @route   POST /api/v1/users/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        //Check for All fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing fields, enter all fields.",
            });
        }

        //Check for a user
        const user = User.findOne({ email });

        //Functions if a user
        if (user) {
            //Comparing passswords
            const isPasswordMatch = await bcrypt.compare(
                password,
                user.password
            );
            if (isPasswordMatch) {
                //Generating a user token
                generateToken(res, user._id);

                //Destructuring the user details
                const { password, ...restOfUserDetails } = user._doc;
                res.status(200).json({
                    success: true,
                    message: "Account login success.",
                    data: restOfUserDetails,
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Passwords does not match.",
                });
            }
        } else {
            return res
                .status(400)
                .json({ success: false, message: "User does not exists." });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    Logout users and delete token
// @route   POST /api/v1/users/auth/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    try {
        //Removing the cookie
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0),
        });

        //Response
        res.status(200).json({
            success: true,
            message: "Account logout success.",
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

//Exports
export { registerUser, loginUser, logoutUser };
