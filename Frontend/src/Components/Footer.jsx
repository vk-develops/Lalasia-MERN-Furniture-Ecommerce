import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../assets/Arrow-Icon.png";
import LalasiaLogo from "../assets/Lalasia-Logo.png";

const JoinCommsSection = () => {
    return (
        <div className="flex justify-between items-center my-5 pb-5">
            <h2 className="text-titleColor font-eduoxusSans font-bold text-2xl">
                Join with me to get special discount
            </h2>
            <Link>
                <div className="flex justify-center items-center gap-4 bg-primaryColor px-6 py-2 shadow-md">
                    <h5 className="text-screenColor1 font-eduoxusSans font-medium text-sm capitalize">
                        Learn More
                    </h5>
                    <img
                        className="w-6"
                        src={ArrowIcon}
                        alt="Icon"
                    />
                </div>
            </Link>
        </div>
    );
};

const MainFooter = () => {
    return (
        <div
            className="flex justify-between items-center py-12 my-5"
            style={{ borderTopWidth: 1.5, borderColor: "#ECE4DE" }}
        >
            <div>
                <img
                    className="w-28"
                    src={LalasiaLogo}
                    alt="Logo"
                />
                <p className="text-titleColor font-eduoxusSans text-psm font-medium mt-8">
                    Lalasia is digital agency that help you make better <br />
                    experience iaculis cras in.
                </p>
            </div>
            <div className="flex justify-center items-start gap-12">
                <div className="flex justify-start items-start gap-2 flex-col">
                    <h5 className="text-titleColor font-eduoxusSans text-plg font-bold">
                        Products
                    </h5>
                    <div>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>New Arrivals</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Best Selling</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Home Decor</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Kitchen Set</Link>
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-2 flex-col">
                    <h5 className="text-titleColor font-eduoxusSans text-plg font-bold">
                        Services
                    </h5>
                    <div>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Catalog</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Blog</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>FAQ</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Pricing</Link>
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-2 flex-col">
                    <h5 className="text-titleColor font-eduoxusSans text-plg font-bold">
                        Follow Us On
                    </h5>
                    <div>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Facebook</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Instagram</Link>
                        </p>
                        <p className="text-titleColor font-eduoxusSans text-psm font-medium hover:text-primaryColor">
                            <Link>Twitter</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CopyrightSection = () => {
    return (
        <div className="w-full p-3 px-10 bg-primaryColor flex items-center justify-between">
            <span className="text-psm font-eduoxusSans font-medium text-screenColor1">
                &copy; 2024 @Lalasia
            </span>
            <span className="text-psm font-eduoxusSans font-medium text-screenColor1">
                Developed by Vk-develops
            </span>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto p-5 bg-screenColor1">
            <JoinCommsSection />
            <MainFooter />
            <CopyrightSection />
        </footer>
    );
};

export default Footer;
