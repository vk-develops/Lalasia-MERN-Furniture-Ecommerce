import express from "express";
import {
    getUserDetails,
    isLoggedin,
    loginUser,
    logoutUser,
    registerUser,
} from "../Controllers/authController.js";
import { protect } from "../Middlewares/authMiddleware.js";

//Router init
const router = express.Router();

//HTTP Methods
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.get("/isloggedin", protect, isLoggedin);
router.get("/user-details", protect, getUserDetails);

//Export
export default router;

// http://localhost:8080/api/v1/users/auth/
