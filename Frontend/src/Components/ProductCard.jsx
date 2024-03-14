import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="w-72 bg-screenColor1 mb-6">
            <div className="relative">
                <img
                    src={product.imageUrls[product.imageUrls.length - 1]}
                    alt="Product Image"
                />

                <button
                    style={{
                        backgroundColor: "rgba(17, 17, 17, .3)",
                        backdropFilter: "blur(3px)",
                    }}
                    className="absolute top-3 right-3 p-3 rounded-full"
                >
                    <FaRegHeart
                        color="#fff"
                        size={18}
                    />
                </button>

                {product.discountPercentage ? (
                    <div className="absolute bottom-3 right-3 bg-[red] px-3 py-1">
                        <h3 className="text-screenColor1 text-base font-eduoxusSans font-medium">
                            {product.discountPercentage}% Discount
                        </h3>
                    </div>
                ) : null}
            </div>
            <Link
                to={`/products/${product._id}`}
                className="py-3"
            >
                <div className="flex items-center justify-start gap-2">
                    {product.type.map((type, index) => (
                        <div
                            key={index}
                            className="mt-4 mb-1 px-3 py-[2px] bg-secondaryColor rounded-lg flex items-center justify-center"
                        >
                            <h5 className="text-screenColor1 text-[11px] font-eduoxusSans font-medium">
                                {type}
                            </h5>
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl font-eduoxusSans font-bold text-titleColor pt-4">
                    {product.name}
                </h3>
                <h4 className="text-paragraphColor font-eduoxusSans text-base font-medium pt-2">
                    {product.subTitle}
                </h4>
                <h3 className="text-2xl font-eduoxusSans font-bold text-primaryColor pt-5">
                    &#8377;{product.price}
                </h3>
            </Link>
        </div>
    );
};

export default ProductCard;
