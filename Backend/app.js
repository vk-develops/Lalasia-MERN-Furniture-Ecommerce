import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";

//App init
dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 8080;

//Built-in Middlewares and Imported ones
app.use(express.json());
app.use(
    cors({
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        origin: process.env.APP_FRONTEND_LINK,
    })
);
app.use(cookieParser());

//HTTP GET Method Test
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "HTTP Method Success!" });
});

app.use("/api/v1/users/auth/", authRoute);

//App listen
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});
