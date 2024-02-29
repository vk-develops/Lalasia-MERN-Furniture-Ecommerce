import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useLocation } from "react-router-dom";

const BackButton = ({ backTo, buttonText }) => {
    const location = useLocation();

    // console.log(location);

    return (
        <div className="inline-block">
            <Link
                to={`${backTo}`}
                className=" bg-placeholderColor border-[.5px] border-[#8885] px-8 py-3 rounded-sm flex items-center justify-center gap-2"
            >
                <MdArrowBack
                    size={22}
                    color="#555"
                />
                <h4 className="text-base font-eduoxusSans font-medium text-[#555]">
                    {buttonText}
                </h4>
            </Link>
        </div>
    );
};

export default BackButton;
