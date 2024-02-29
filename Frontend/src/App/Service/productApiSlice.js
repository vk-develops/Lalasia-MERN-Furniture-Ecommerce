import { FURNITURE_PRODUCTS_URI } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: `${FURNITURE_PRODUCTS_URI}/get-all-products`,
                method: "GET",
                credentials: "include",
            }),
        }),
        getAProductQuery: builder.query({
            query: ({ id }) => ({
                url: `${FURNITURE_PRODUCTS_URI}/get-a-product`,
                method: "GET",
                credentials: "include",
            }),
        }),
        getRelatedProducts: builder.query({
            query: ({ type, id }) => ({
                url: `${FURNITURE_PRODUCTS_URI}/get-related-products/${id}/${type}`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const { useGetAllProductsQuery, useGetRelatedProductsQuery } =
    productApiSlice;
