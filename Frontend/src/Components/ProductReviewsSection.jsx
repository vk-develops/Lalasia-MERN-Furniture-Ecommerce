import React, { useEffect, useState } from "react";
import { useGetProductReviewQuery } from "../App/Service/productApiSlice";
import Loader from "./Loader";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviewsSection = ({ id }) => {
    const { data, isLoading, isError } = useGetProductReviewQuery({ id });

    const [productReview, setProductReview] = useState(null);

    useEffect(() => {
        if (data) {
            setProductReview(data.data);
        }
    }, [data]);

    if (isError) {
        return <h1>An error occured!</h1>;
    }

    return (
        <>
            {isLoading && <Loader />}
            <div className="mt-10 pt-16">
                <h2
                    className={`text-titleColor font-eduoxusSans text-[32px] font-bold pb-8`}
                >
                    Product Reviews
                </h2>
                {productReview &&
                    productReview.map((review) => (
                        <ProductReviewCard
                            key={review._id}
                            productReview={review}
                        />
                    ))}
            </div>
        </>
    );
};

export default ProductReviewsSection;
