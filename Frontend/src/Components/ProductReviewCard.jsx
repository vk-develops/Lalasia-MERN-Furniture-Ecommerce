import React from "react";

const ProductReviewCard = ({ productReview }) => {
    return (
        <div className="w-2/4 p-10">
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

                        <p className="pt-3 text-base font-eduoxusSans text-titleColor font-medium">
                            {productReview.comment}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewCard;
