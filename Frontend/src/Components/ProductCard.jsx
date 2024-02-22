import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    function generateRandomId() {
        const randomNumberString = Math.random().toString().substring(2);

        const randomId = `${randomNumberString}`;
        return randomId;
    }

    return (
        <div className="w-72 bg-screenColor1 mb-6">
            <div>
                <img
                    src={product.imageUrls[5]}
                    alt="Product Image"
                />
            </div>
            <Link
                to={`products/${product._id}`}
                className="py-3"
            >
                <div className="flex items-center justify-start gap-2">
                    {product.type.map((type) => (
                        <div
                            key={generateRandomId()}
                            className="mt-4 mb-1 px-4 py-[2px] bg-primaryColor rounded-lg flex items-center justify-center"
                        >
                            <h5 className="text-screenColor1 text-[12px] font-eduoxusSans font-medium">
                                {type}
                            </h5>
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl font-eduoxusSans font-bold text-titleColor pt-4">
                    {product.name}
                </h3>
                <h4 className="text-paragraphColor font-eduoxusSans text-base font-medium pt-2">
                    Combination of wool which was made using the popular wool
                </h4>
                <h3 className="text-2xl font-eduoxusSans font-bold text-primaryColor pt-5">
                    $63.45
                </h3>
            </Link>
        </div>
    );
};

export default ProductCard;
