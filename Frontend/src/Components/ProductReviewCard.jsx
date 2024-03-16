import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductReviewCard = ({ productReview }) => {
    const renderStar = (star) => {
        const stars = [];
        for (let i = 0; i < star; i++) {
            stars.push(i);
        }

        return stars;
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
                    <div className=" -mt-[3px]">
                        <div className="flex items-start justify-start flex-col gap-[2px]">
                            <h6 className="text-base font-eduoxusSans font-medium text-primaryColor">
                                {productReview.userName}
                            </h6>
                            <h6 className="text-[12px] font-eduoxusSans font-noraml text-paragraphColor">
                                {productReview.userEmail}
                            </h6>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewCard;
