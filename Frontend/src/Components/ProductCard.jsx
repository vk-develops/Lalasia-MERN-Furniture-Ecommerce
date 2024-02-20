import React from "react";

const ProductCard = () => {
    return (
        <div className="w-96 bg-screenColor1">
            <div>
                <img
                    src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
                    alt="Product Image"
                />
            </div>
            <div className="py-3">
                <h5 className="text-secondaryColor text-sm font-eduoxusSans font-medium pt-[10px]">
                    Product
                </h5>
                <h3 className="text-2xl font-eduoxusSans font-bold text-titleColor pt-4">
                    White Aesthetic Chair
                </h3>
                <h4 className="text-paragraphColor font-eduoxusSans text-base font-medium pt-2">
                    Combination of wool which was made using the popular wool
                </h4>
                <h3 className="text-2xl font-eduoxusSans font-bold text-primaryColor pt-5">
                    $63.45
                </h3>
            </div>
        </div>
    );
};

export default ProductCard;
