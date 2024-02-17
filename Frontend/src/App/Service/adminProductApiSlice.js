import { ADMIN_PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const adminProductApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_PRODUCT_URL}/create-product`,
                method: "POST",
                credentials: "include",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                body: data,
            }),
        }),
        getAllProducts: builder.query({
            query: () => ({
                url: `${ADMIN_PRODUCT_URL}/get-all-products`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }),
        }),
        getAProduct: builder.query({
            query: () => ({
                url: `${ADMIN_PRODUCT_URL}/get-a-product`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetAProductQuery,
} = adminProductApiSlice;
