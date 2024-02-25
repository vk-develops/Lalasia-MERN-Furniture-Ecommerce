import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Layout from "../Components/Layout";
import ProductsPage from "../Pages/Products/ProductsPage";
import RegisterPage from "../Pages/Auth/RegisterPage";
import LoginPage from "../Pages/Auth/LoginPage";
import VerifyPage from "../Pages/Auth/VerifyPage";
import AdminPage from "../Pages/Admin/AdminPAge";
import CreateProductPage from "../Pages/Admin/CreateProductPage";
import { useDispatch } from "react-redux";
import { setCredentials } from "../App/Features/usersAuthSlice";
import ProductDetailPage from "../Pages/Products/ProductDetailPage";

const Router = () => {
    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const checkIsLoggedIn = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/${
                    import.meta.env.VITE_BACKEND_USERS_AUTH_URI
                }/isloggedin`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            if (response.ok) {
                const data = await response.json();
                const userInfo = data.userInfo;

                dispatch(setCredentials(userInfo));
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    //Adding scroll to top on loading a new page and checking is user logged in or not
    useEffect(() => {
        checkIsLoggedIn();
        window.scrollTo(0, 0);
    }, [pathname]);

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

                <Route
                    path="products"
                    element={<ProductsPage />}
                />
                <Route
                    path="products/:id"
                    element={<ProductDetailPage />}
                />

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
