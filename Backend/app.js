import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import crypto from "crypto";

const token = crypto.randomBytes(64).toString("hex");
console.log(token);

//App init
dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 8080;

//HTTP GET Method Test
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "HTTP Method Success!" });
});

//App listen
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});
