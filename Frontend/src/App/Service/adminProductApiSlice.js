import { ADMIN_PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const adminProductApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_PRODUCT_URL}/create-product`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),
    }),
});

export const { useCreateProductMutation } = adminProductApiSlice;
