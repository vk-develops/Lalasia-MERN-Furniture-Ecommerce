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

            //Destructuring the user info
            const { _id, name, email } = user;

            //Destructuring the user details
            const { password, ...restofUserDetails } = user._doc;

            res.status(201).json({
                success: true,
                message: "Account registration success.",
                data: restofUserDetails,
                userInfo: {
                    _id,
                    name,
                    email,
                },
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
        const user = await User.findOne({ email });

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

                //Destructuring the user info
                const { _id, name, email } = user;

                //Destructuring the user details
                const { password, ...restOfUserDetails } = user._doc;

                res.status(200).json({
                    success: true,
                    message: "Account login success.",
                    data: restOfUserDetails,
                    userInfo: {
                        _id,
                        name,
                        email,
                    },
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

// @desc    To check if user is loggedin and do they have the token
// @route   POST /api/v1/users/auth/isloggedin
// @access  Private
const isLoggedin = asyncHandler(async (req, res) => {
    try {
        //Getting the id from the protect route
        const id = req.user._id;

        //Find the user
        const user = await User.findById(id);

        if (user) {
            //Destructuring the user details
            const { password, ...resetofUserDetails } = user._doc;

            //Destructuring the user info
            const { _id, name, email } = user;

            res.status(200).json({
                success: true,
                message: "Yes, User is loggedin",
                data: resetofUserDetails,
                userInfo: { _id, name, email },
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

// @desc    To retireve the user details
// @route   POST /api/v1/users/auth/user-details
// @access  Private
const getUserDetails = asyncHandler(async (req, res) => {
    try {
        //Getting the id from the protect route
        const id = req.params.id;

        //Find the user
        const user = await User.findById({ _id: id });

        if (user) {
            //Destructuring the user details
            const { password, ...resetofUserDetails } = user._doc;

            //Destructuring the user info
            const { _id, name, email } = user;

            res.status(200).json({
                success: true,
                message: "Yes, User data retrieval done successfully",
                data: resetofUserDetails,
                userInfo: { _id, name, email },
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

//Exports
export { registerUser, loginUser, logoutUser, isLoggedin, getUserDetails };
