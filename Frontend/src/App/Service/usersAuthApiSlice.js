import { USERS_AUTH_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersAuthApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_AUTH_URL}/register`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_AUTH_URL}/login`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_AUTH_URL}/logout`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),

        isLoggedIn: builder.query({
            query: () => ({
                url: `${USERS_AUTH_URL}/isloggedin`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useIsLoggedInQuery,
} = usersAuthApiSlice;
