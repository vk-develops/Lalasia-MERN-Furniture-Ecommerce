import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteReviewMutation } from "../App/Service/productApiSlice";
import { useSuccessToast } from "../Hooks/useToast";

const ProductReviewCard = ({ productReview, user, refetch }) => {
    const [deleteReview] = useDeleteReviewMutation();

    const renderStar = (star) => {
        const stars = [];
        for (let i = 0; i < star; i++) {
            stars.push(i);
        }

        return stars;
    };

    const getReviewDate = (reviewDate) => {
        const date = new Date(reviewDate);

        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        //Extracting date
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

        return formattedDate;
    };

    const deleteProductReview = async (id) => {
        try {
            const response = await deleteReview({ productID: id }).unwrap();

            if (response.success) {
                await refetch();
                useSuccessToast(response.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="w-2/4 py-7">
            <div>
                <div className="flex items-start justify-start gap-5">
                    <img
                        src={`${
                            productReview.userImage
                                ? productReview.userImage
                                : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                        }`}
                        alt="Profile Image"
                        className="w-[40px] rounded-full"
                    />
                    <div className="-mt-[3px] w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-start justify-start flex-col gap-[2px]">
                                <h6 className="text-base font-eduoxusSans font-medium text-primaryColor">
                                    {productReview.userName}
                                </h6>
                                <h6 className="text-[12px] font-eduoxusSans font-noraml text-paragraphColor">
                                    {productReview.userEmail}
                                </h6>
                            </div>

                            {user.isAuthenticated &&
                            productReview.userId === user._id ? (
                                <div className="mt-4">
                                    <button
                                        onClick={() =>
                                            deleteProductReview(
                                                productReview._id
                                            )
                                        }
                                        className="bg-screenColor2 p-1"
                                    >
                                        <MdDeleteOutline
                                            color="red"
                                            size={24}
                                        />
                                    </button>
                                </div>
                            ) : null}
                        </div>

                        <div className="flex items-center justify-start mt-4">
                            {renderStar(productReview.starRating).map(
                                (star, index) => (
                                    <FaStar
                                        key={index}
                                        className="text-secondaryColor"
                                    />
                                )
                            )}
                        </div>

                        <p className="pt-2 text-base font-eduoxusSans text-titleColor font-medium">
                            {productReview.comment}
                        </p>

                        <p className="pt-5 text-[12px] font-eduoxusSans font-medium text-[#555]">
                            {getReviewDate(productReview.createdAt)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewCard;
