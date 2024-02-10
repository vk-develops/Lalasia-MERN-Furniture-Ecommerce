import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Layout from "../Components/Layout";
import ProductsPage from "../Pages/Products/ProductsPage";
import RegisterPage from "../Pages/Auth/RegisterPage";
import LoginPage from "../Pages/Auth/LoginPage";
import VerifyPage from "../Pages/Auth/VerifyPage";
import AdminPage from "../Pages/Admin/AdminPAge";
import CreateProductPage from "../Pages/Admin/CreateProductPage";

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
                    <Route
                        path="register"
                        element={<RegisterPage />}
                    />
                    <Route
                        path="login"
                        element={<LoginPage />}
                    />
                    <Route
                        path="verify"
                        element={<VerifyPage />}
                    />
                    <Route path="reset-password" />
                </Route>

                <Route path="products">
                    <Route
                        index
                        element={<ProductsPage />}
                    />
                </Route>

                <Route path="admin">
                    <Route
                        index
                        element={<AdminPage />}
                    />
                    <Route
                        path="create-product"
                        element={<CreateProductPage />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
