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
        getSearchProducts: builder.query({
            query: (page, search) => ({
                url: `${FURNITURE_PRODUCTS_URI}/search-products?page=${page}${
                    search ? `&search=${search}` : ``
                }`,
                method: "GET",
                credentials: "include",
                selectFromResult: ({ data }) => data,
            }),
        }),
        getAProduct: builder.query({
            query: ({ id }) => ({
                url: `${FURNITURE_PRODUCTS_URI}/get-a-product/${id}`,
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
        createReview: builder.mutation({
            query: ({ data, productID }) => ({
                url: `${FURNITURE_PRODUCTS_URI}/product-review/${productID}`,
                method: "POST",
                credentials: "include",
                body: data,
            }),
        }),
        getProductReview: builder.query({
            query: ({ id }) => ({
                url: `${FURNITURE_PRODUCTS_URI}/get-product-review/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetRelatedProductsQuery,
    useGetAProductQuery,
    useGetSearchProductsQuery,
    useCreateReviewMutation,
    useGetProductReviewQuery,
} = productApiSlice;
