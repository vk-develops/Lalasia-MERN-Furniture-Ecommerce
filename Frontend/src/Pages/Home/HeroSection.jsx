import React from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../../Styles/styles";
import HeroIcon from "../../assets/HeroElement-1.png";
import HeroImage from "../../assets/HeroBg.png";
import SearchIcon from "../../assets/Search-Icon.png";

const HeroSection = () => {
    return (
        <section className={`${styles.layout} h-auto mb-10 mt-8`}>
            <div>
                <h1 className={`${styles.headingText} text-center`}>
                    Discover Furniture With <br /> High Quality Wood{" "}
                    <img
                        className="w-12 inline-block pb-12 -ml-2"
                        src={HeroIcon}
                        alt="Hero Icon"
                    />{" "}
                </h1>

                <div className="w-3/4 max-mobile:w-full mx-auto">
                    <p className={`${styles.paragraphText} text-center pt-4`}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non.
                        Purus parturient viverra nunc, tortor sit laoreet. Quam
                        tincidunt aliquam adipiscing tempor.
                    </p>
                </div>
            </div>

            <form className="px-5 py-3 relative mt-9 bg-screenColor1 shadow-new w-3/4 mx-auto z-20 flex items-center justify-between border-t border-screenColor2">
                <div className="flex items-center justify-center gap-4 z-20">
                    <img
                        className="w-6"
                        src={SearchIcon}
                        alt="Search icon"
                    />

                    <input
                        className={`${styles.navLink}`}
                        type="text"
                        placeholder="Search for products"
                    />
                </div>
                <NavLink className={`${styles.navButton} px-8`}>Search</NavLink>
            </form>

            <div className="-z-20 ">
                <img
                    className="w-full -z-20 -mt-8"
                    src={HeroImage}
                    alt="Hero Image"
                />
            </div>
        </section>
    );
};

export default HeroSection;
