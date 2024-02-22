import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Router from "./Router/Router";
import store from "./App/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
