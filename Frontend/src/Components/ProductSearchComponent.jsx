import React from "react";
import { IoFilter } from "react-icons/io5";
import SearchIcon from "../assets/Search-Icon.png";

const ProductSearchComponent = () => {
    return (
        <div className="z-10 relative">
            <div className="absolute w-full flex items-start justify-between gap-6">
                <form className="px-5 w-full py-2  bg-screenColor1 border-[1.5px] border-screenColor2 shadow-new ">
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
                            />
                        </div>
                        <button className="px-8 py-2 bg-primaryColor text-base font-eduoxusSans font-medium text-screenColor1">
                            Search
                        </button>
                    </div>
                    {/* <div className="w-full py-10 border-2 border-screenColor2"></div> */}
                </form>
                <button className="px-8 py-4 flex items-center justify-center gap-3 bg-screenColor1 text-base font-eduoxusSans font-medium text-titleColor shadow-new border-[1.5px] border-screenColor2">
                    <IoFilter size={24} />
                    Filter
                </button>
            </div>
        </div>
    );
};

export default ProductSearchComponent;
