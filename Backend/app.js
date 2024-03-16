import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import cookieParser from "cookie-parser";
import connectDb from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";
import adminProductRoute from "./Routes/adminProductRoute.js";
import productsRoute from "./Routes/productRoute.js";

//App init
dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 8080;

//Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Built-in Middlewares and Imported ones
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        origin: process.env.APP_FRONTEND_LINK,
    })
);
app.use(cookieParser());

//Cloudinary init
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET_KEY,
});

//HTTP GET Method Test
app.get("/api/v1/", (req, res) => {
    res.status(200).json({ success: true, message: "HTTP Method Success!" });
});

//Express static
app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

//APP HTTP Methods
app.use("/api/v1/users/auth/", authRoute);
app.use("/api/v1/admin/products/", adminProductRoute);
app.use("/api/v1/furniture/products/", productsRoute);

//Express Static
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Frontend/dist/index.html"));
});

//App listen
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});
