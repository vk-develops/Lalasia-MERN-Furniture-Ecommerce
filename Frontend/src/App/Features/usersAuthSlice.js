import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    user: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
};

const usersAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));

            const expirationTime =
                new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
            localStorage.setItem("expirationTime", expirationTime);
        },

        removeCredentials: (state) => {
            state.userInfo = null;
            state.user = null;
            localStorage.clear();
        },
    },
});

export const { setCredentials, removeCredentials } = usersAuthSlice.actions;
export default usersAuthSlice.reducer;
