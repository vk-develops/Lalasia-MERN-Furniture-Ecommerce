import React from "react";

const ProductReviewCard = ({ productReview }) => {
    return (
        <div className="w-2/4 p-10">
            <div>
                <div>
                    <img
                        src={`${
                            productReview.userImage
                                ? productReview.userImage
                                : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                        }`}
                        alt="Profile Image"
                        className="w-12 rounded-full"
                    />
                    <div>
                        <h6>{productReview.userName}</h6>
                        <h6>{productReview.c}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewCard;
