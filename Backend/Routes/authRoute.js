import express from "express";

//Router init
const router = express.Router();

//HTTP Methods
router.post("/register");
router.post("/login");
router.post("/logout");

//Export
export default router;

// http://localhost:8080/api/v1/users/auth/
