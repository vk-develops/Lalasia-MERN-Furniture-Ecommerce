import React, { useEffect, useState } from "react";
import { useGetProductReviewQuery } from "../App/Service/productApiSlice";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ProductReviewsSection = ({ id }) => {
    // const { id } = useParams();

    console.log(id);

    const { data, isLoading, isError } = useGetProductReviewQuery({ id });

    const [productReview, setProductReview] = useState({});

    useEffect(() => {
        if (data) {
            console.log(data);
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
                {productReview && (
                    <div className="w-2/4 bg-[red] p-10">
                        <div></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductReviewsSection;
