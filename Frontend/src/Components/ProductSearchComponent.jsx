import React, { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/Search-Icon.png";
import { useGetAllProductsQuery } from "../App/Service/productApiSlice";

const ProductSearchResults = () => {
    const [products, setProducts] = useState([]);
    const { data, isError } = useGetAllProductsQuery();

    useEffect(() => {
        if (data) {
            setProducts(data.data);
        }
    }, [data]);

    if (isError) {
        return <h1>No Products Found</h1>;
    }

    return (
        <div className="w-full py-3 h-full overflow-scroll mb-2">
            <div className="px-2 py-1 mt-2 mb-4 rounded-md bg-primaryColor text-screenColor1 inline-block font-eduoxusSans text-xs font-regular">
                <p>Search Products</p>
            </div>
            {products &&
                products.map((product, index) => (
                    <Link
                        to={`./${product._id}`}
                        onMouseDown={(e) => e.preventDefault()}
                        key={index}
                        className="flex items-center justify-start gap-2 py-3"
                    >
                        <img
                            className="w-5"
                            src={SearchIcon}
                            alt="Search icon"
                        />
                        <h6 className="text-lg font-eduoxusSans text-paragraphColor font-normal">
                            {product.name}
                        </h6>
                    </Link>
                ))}
        </div>
    );
};

const ProductFormComponent = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    return (
        <form
            className={`px-5 w-full py-2 ${
                isInputFocused ? `h-96` : ""
            } bg-screenColor1 border-[1px] border-[#ccc] shadow-new overflow-hidden`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-4 w-3/4">
                    <img
                        className="w-6"
                        src={SearchIcon}
                        alt="Search icon"
                    />
                    <input
                        className={`font-eduoxusSans text-sm font-regular w-full outline-none`}
                        type="text"
                        placeholder="Search for products"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
                <button className="px-8 py-2 bg-primaryColor text-base font-eduoxusSans font-medium text-screenColor1">
                    Search
                </button>
            </div>
            {isInputFocused && <ProductSearchResults />}
        </form>
    );
};

const ProductSearchComponent = () => {
    return (
        <div className="z-10 relative">
            <div className="absolute w-full flex items-start justify-between gap-6">
                <ProductFormComponent />
                <button className="px-8 py-4 flex items-center justify-center gap-3 bg-screenColor1 text-base font-eduoxusSans font-medium text-titleColor shadow-new border-[1px] border-[#ccc]">
                    <IoFilter size={24} />
                    Filter
                </button>
            </div>
        </div>
    );
};

export default ProductSearchComponent;
