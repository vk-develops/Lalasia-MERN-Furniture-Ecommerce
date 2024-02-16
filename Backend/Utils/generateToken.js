import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    //Creating a token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
    });

    //Sending a cookie
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        // maxAge: 2 * 60 * 1000,
        maxAge: 1 * 24 * 60 * 60 * 1000,
    });
};

//Export
export default generateToken;
