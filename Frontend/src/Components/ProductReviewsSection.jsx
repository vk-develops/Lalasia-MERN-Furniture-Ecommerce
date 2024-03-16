import React, { useEffect, useState } from "react";
import { MdCreate } from "react-icons/md";
import { useGetProductReviewQuery } from "../App/Service/productApiSlice";
import Loader from "./Loader";
import ProductReviewCard from "./ProductReviewCard";
import { styles } from "../Styles/styles";

const ProductReviewForm = ({ handleToggleReviewForm }) => {
    return (
        <div className="w-3/4 p-7 bg-screenColor1 border-[.5px] border-[#8885]">
            <form>
                <div className="mt-7">
                    <label className={`${styles.formLabel}`}>
                        Product Name:{" "}
                    </label>
                    <input
                        className={`${styles.formInput}`}
                        type="text"
                        placeholder="Enter the name of the product"
                        // value={name}
                        required
                        // onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </form>
            <button onClick={handleToggleReviewForm}>Cancel</button>
            <button>Submit</button>
        </div>
    );
};

const ProductReviewsSection = ({ id }) => {
    const { data, isLoading, isError } = useGetProductReviewQuery({ id });

    const [productReview, setProductReview] = useState(null);
    const [addReview, setAddReview] = useState(false);

    useEffect(() => {
        if (data) {
            setProductReview(data.data);
        }
    }, [data]);

    if (isError) {
        return <h1>An error occured!</h1>;
    }

    const handleToggleReviewForm = () => {
        setAddReview(!addReview);
    };

    const handleClick = () => {
        setAddReview(true);
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className="mt-10 pt-16">
                <h2
                    className={`text-titleColor font-eduoxusSans text-[32px] font-bold pb-8`}
                >
                    Product Reviews
                </h2>
                {productReview && productReview.length > 0 ? (
                    productReview.map((review) => (
                        <ProductReviewCard
                            key={review._id}
                            productReview={review}
                        />
                    ))
                ) : addReview ? (
                    <ProductReviewForm
                        handleToggleReviewForm={handleToggleReviewForm}
                    />
                ) : (
                    <div className="w-3/4 p-7 bg-screenColor1 border-[.5px] border-[#8885] flex items-center justify-center flex-col">
                        <p className="text-center font-eduoxusSans text-base font-medium text-titleColor pb-8 pt-3">
                            There is no customer reviews for this product yet.
                            Be the first to upload a product review and make
                            everyone understand the value of this product
                        </p>
                        <button
                            onClick={handleClick}
                            className="bg-screenColor2 border-[.5px] border-[#8885] px-8 py-3 rounded-sm flex items-center justify-center gap-2"
                        >
                            <MdCreate
                                size={22}
                                color="#555"
                            />
                            <h4 className="text-base font-eduoxusSans font-medium text-[#555]">
                                Post Review
                            </h4>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductReviewsSection;
