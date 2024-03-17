import React, { useEffect, useState } from "react";
import { MdCreate } from "react-icons/md";
import { useSelector } from "react-redux";
import {
    useCreateReviewMutation,
    useGetProductReviewQuery,
} from "../App/Service/productApiSlice";
import Loader from "./Loader";
import ProductReviewCard from "./ProductReviewCard";
import { styles } from "../Styles/styles";
import { useErrorToast, useSuccessToast } from "../Hooks/useToast";

const ProductReviewForm = ({ productId, refetch, handleToggleReviewForm }) => {
    const [starRating, setStarRating] = useState("");
    const [comment, setComment] = useState("");

    const [createReview, { isLoading }] = useCreateReviewMutation();

    const submitReviewHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await createReview({
                data: { starRating, comment },
                productID: productId,
            }).unwrap();
            console.log(response);

            if (response.success) {
                useSuccessToast("Review Posted Successfully");

                await refetch();
                handleToggleReviewForm();
            }
        } catch (err) {
            console.log(err.message);
            useErrorToast("Server Error! please try again later");
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className="w-3/4 p-7 bg-screenColor1 border-[.5px] border-[#8885]">
                <form onSubmit={submitReviewHandler}>
                    <div className="mt-2">
                        <label className={`${styles.formLabel}`}>
                            Product Rating:{" "}
                        </label>
                        <select
                            value={starRating}
                            required
                            onChange={(e) => setStarRating(e.target.value)}
                            className="border-[1.5px] border-paragraphColor mt-3 px-5 pr-5 font-eduoxusSans rounded-lg w-full p-2 text-paragraphColor outline-none font-normal"
                        >
                            <option value="">Select an option</option>
                            {[1, 2, 3, 4, 5].map((num, index) => (
                                <option
                                    key={index}
                                    value={num}
                                >
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-6">
                        <label className={`${styles.formLabel}`}>
                            Product Review:{" "}
                        </label>
                        <textarea
                            value={comment}
                            required
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Enter the description of the product"
                            className="w-full pt-5 h-40 outline-none border-[1.5px] text-sm pl-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-end gap-5 mt-8">
                        <button
                            className="py-2 px-12 bg-screenColor2 font-eduoxusSans text-base font-medium border-[1px] border-paragraphColor"
                            onClick={handleToggleReviewForm}
                        >
                            Cancel
                        </button>
                        <button
                            type="Submit"
                            className="py-2 px-12 bg-primaryColor font-eduoxusSans text-base font-medium text-screenColor1"
                        >
                            Post Review
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

const ProductReviewsSection = ({ id }) => {
    const user = useSelector((state) => state.auth);

    const { data, isLoading, isError, refetch } = useGetProductReviewQuery({
        id,
    });

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

                {addReview ? (
                    <ProductReviewForm
                        productId={id}
                        refetch={refetch}
                        handleToggleReviewForm={handleToggleReviewForm}
                    />
                ) : productReview && productReview.length > 0 ? (
                    <>
                        {productReview.map((review) => (
                            <ProductReviewCard
                                key={review._id}
                                productReview={review}
                            />
                        ))}
                        <button
                            onClick={handleClick}
                            className="w-2/4 mt-5 bg-screenColor2 border-[.5px] border-[#8885] py-3 flex items-center justify-center gap-3"
                        >
                            <MdCreate
                                size={22}
                                color="#555"
                            />
                            <h1 className="text-base text-titleColor font-eduoxusSans font-medium">
                                Post Review
                            </h1>
                        </button>
                    </>
                ) : (
                    <div className="w-3/4 p-7 bg-screenColor1 border-[.5px] border-[#8885] flex items-center justify-center flex-col">
                        <p className="text-center font-eduoxusSans text-base font-medium text-titleColor pb-8 pt-3">
                            There is no customer reviews for this product yet.
                            Be the first to upload a product review and make
                            everyone understand the value of this product
                        </p>
                        {user.isAuthenticated ? (
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
                        ) : (
                            <button
                                onClick={handleClick}
                                className="bg-screenColor2 border-[.5px] border-[#8885] px-8 py-3 rounded-sm"
                            >
                                <h4 className="text-base font-eduoxusSans font-medium text-[#555] capitalize">
                                    Login to post a review
                                </h4>
                            </button>
                        )}
                    </div>
                )}

                {/* {productReview && productReview.length > 0 ? (
                    <>
                        {productReview.map((review) => (
                            <ProductReviewCard
                                key={review._id}
                                productReview={review}
                            />
                        ))}
                        <button
                            onClick={handleClick}
                            className="w-2/4 mt-5 bg-screenColor2 border-[.5px] border-[#8885] py-3 flex items-center justify-center gap-3"
                        >
                            <MdCreate
                                size={22}
                                color="#555"
                            />
                            <h1 className="text-base text-titleColor font-eduoxusSans font-medium">
                                Post Review
                            </h1>
                        </button>
                    </>
                ) : addReview ? (
                    <ProductReviewForm
                        productId={id}
                        refetch={refetch}
                        handleToggleReviewForm={handleToggleReviewForm}
                    />
                ) : (
                    <div className="w-3/4 p-7 bg-screenColor1 border-[.5px] border-[#8885] flex items-center justify-center flex-col">
                        <p className="text-center font-eduoxusSans text-base font-medium text-titleColor pb-8 pt-3">
                            There is no customer reviews for this product yet.
                            Be the first to upload a product review and make
                            everyone understand the value of this product
                        </p>
                        {user.isAuthenticated ? (
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
                        ) : (
                            <button
                                onClick={handleClick}
                                className="bg-screenColor2 border-[.5px] border-[#8885] px-8 py-3 rounded-sm"
                            >
                                <h4 className="text-base font-eduoxusSans font-medium text-[#555] capitalize">
                                    Login to post a review
                                </h4>
                            </button>
                        )}
                    </div>
                )} */}
            </div>
        </>
    );
};

export default ProductReviewsSection;
