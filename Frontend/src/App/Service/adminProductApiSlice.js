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
                credentials: "include",
            }),
        }),
        getAProduct: builder.query({
            query: ({ id }) => ({
                url: `${ADMIN_PRODUCT_URL}/get-a-product/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `${ADMIN_PRODUCT_URL}/update-product/${id}`,
                method: "PUT",
                credentials: "include",
                body: JSON.stringify(data), // Convert data to JSON string
                headers: {
                    "Content-Type": "application/json", // Set Content-Type header
                },
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `${ADMIN_PRODUCT_URL}/delete-product/${id}`,
                method: "DELETE",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetAProductQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = adminProductApiSlice;
