import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Layout from "../Components/Layout";

const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}
            >
                {/* HomePage Route */}
                <Route
                    index
                    element={<HomePage />}
                />

                {/* Account Routes */}
                <Route path="account">
                    <Route path="register" />
                    <Route path="login" />
                    <Route path="verify" />
                    <Route path="reset-password" />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
