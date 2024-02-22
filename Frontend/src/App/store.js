import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Service/apiSlice";
import usersAuthSlice from "./Features/usersAuthSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: usersAuthSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: false,
});

export default store;
