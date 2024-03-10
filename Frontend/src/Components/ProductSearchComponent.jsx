import React, { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import SearchIcon from "../assets/Search-Icon.png";
import { useGetAllProductsQuery } from "../App/Service/productApiSlice";
import { furnitureTypes } from "../Data/furnitureTypes";
import { styles } from "../Styles/styles";
import { furnitureColors } from "../Data/furnitureColors";

const ProductSearchResults = ({ search }) => {
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

    const filteredProduct = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full py-3 h-full overflow-scroll mb-2">
            <div className="px-2 py-1 mt-2 mb-4 rounded-md bg-primaryColor text-screenColor1 inline-block font-eduoxusSans text-xs font-regular">
                <p>Search Products</p>
            </div>
            {products &&
                filteredProduct.map((product, index) => (
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
    const [search, setSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSearch("search", search);
    };

    const handleSearch = (key, value) => {
        setSearchParams((prevParam) => {
            if (value === null) {
                prevParam.delete(key);
            } else {
                prevParam.set(key, value);
            }

            return prevParam;
        });
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for products"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="px-8 py-2 bg-primaryColor text-base font-eduoxusSans font-medium text-screenColor1"
                >
                    Search
                </button>
            </div>
            {isInputFocused && <ProductSearchResults search={search} />}
        </form>
    );
};

const ProductSearchFilterComponent = () => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [budget, setBudget] = useState("");
    const [showDiscounted, setShowDiscounted] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleCheckboxChange = (e) => {
        setShowDiscounted(e.target.checked);
    };

    const handleRadioChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleSelectColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const setParams = (key, value) => {
        setSearchParams((prevParam) => {
            if (value === null) {
                prevParam.delete(key);
            } else {
                prevParam.set(key, value);
            }

            return prevParam;
        });
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();

        if (selectedType != "") {
            setParams("type", selectedType);
        }

        if (selectedColor != "") {
            setParams("color", selectedColor);
        }

        if (budget != "") {
            setParams("budget", budget);
        }

        if (showDiscounted) {
            setParams("discount", true);
        }
    };

    return (
        <div className="p-8 bg-screenColor1 border-[1px] border-[#ccc] shadow-new">
            <form onSubmit={handleFilterSubmit}>
                <div>
                    <label className={`${styles.formLabel}`}>
                        Product Type:
                    </label>

                    <div className="pb-8 pt-6 grid grid-cols-7 gap-2">
                        {furnitureTypes.map((furniture, index) => (
                            <label
                                key={index}
                                className={`${
                                    selectedType === furniture
                                        ? `bg-secondaryColor text-screenColor1`
                                        : `bg-screenColor2`
                                } cursor-pointer text-center font-eduoxusSans font-medium text-sm rounded-full px-4 py-2`}
                            >
                                <input
                                    type="radio"
                                    name="furnitureType"
                                    value={furniture}
                                    checked={selectedType === furniture}
                                    onChange={handleRadioChange}
                                    className="hidden"
                                />
                                {furniture}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="grid grid-flow-col gap-10">
                    <div>
                        <label className={`${styles.formLabel}`}>
                            Product Type:
                        </label>
                        <div className="pb-8 pt-6 grid grid-cols-5 gap-2">
                            {furnitureColors.map((color, index) => (
                                <label
                                    key={index}
                                    className={`${
                                        selectedColor === color
                                            ? `bg-secondaryColor text-screenColor1`
                                            : `bg-screenColor2`
                                    } cursor-pointer text-center font-eduoxusSans font-medium text-sm rounded-full px-4 py-2`}
                                >
                                    <input
                                        type="radio"
                                        name="furnitureType"
                                        value={color}
                                        checked={selectedColor === color}
                                        onChange={handleSelectColorChange}
                                        className="hidden"
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <label className={`${styles.formLabel}`}>Price: </label>
                        <input
                            className={`${styles.formInput}`}
                            type="text"
                            placeholder="Enter your budget here "
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <label className={styles.formLabel}>
                        <input
                            type="checkbox"
                            name="discount"
                            checked={showDiscounted}
                            onChange={handleCheckboxChange}
                        />
                        Show only disounted product
                    </label>

                    <div className="flex items-center justify-end gap-5">
                        <button
                            // disabled={isLoading}
                            className={`px-12 py-3 bg-screenColor2 inline-block text-titleColor font-eduoxusSans font-medium text-sm max-mobile:text-xs`}
                        >
                            Reset Filters
                        </button>
                        <button
                            type="submit"
                            // disabled={isLoading}
                            className={`px-16 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs`}
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const ProductSearchComponent = ({ toggle }) => {
    const handleToggle = () => {
        toggle();
    };

    return (
        <div className="z-10 relative">
            <div className="absolute w-full flex items-start justify-between gap-6">
                <ProductFormComponent />
                <button
                    onClick={handleToggle}
                    className="px-8 py-4 flex items-center justify-center gap-3 bg-screenColor1 text-base font-eduoxusSans font-medium text-titleColor shadow-new border-[1px] border-[#ccc]"
                >
                    <IoFilter size={24} />
                    Filter
                </button>
            </div>
        </div>
    );
};

export default ProductSearchComponent;
export { ProductSearchFilterComponent };
