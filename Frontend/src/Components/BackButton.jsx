import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const BackButton = ({ buttonText }) => {
    return (
        <Link
            // to={`create-product`}
            className=" bg-placeholderColor border-[.5px] border-[#8885] px-8 py-3 rounded-sm flex items-center justify-center gap-2"
        >
            <MdArrowBack
                size={22}
                color="#555"
            />
            <h4 className="text-base font-eduoxusSans font-medium text-[#555]">
                Create Product
            </h4>
        </Link>
    );
};

export default BackButton;
