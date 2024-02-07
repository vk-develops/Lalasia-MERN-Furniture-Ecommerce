import React from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../../Styles/styles";
import HeroIcon from "../../assets/HeroElement-1.png";
import HeroImage from "../../assets/HeroBg.png";
import SearchIcon from "../../assets/Search-Icon.png";

const HeroSection = () => {
    return (
        <section className={`${styles.layout} h-auto mt-8`}>
            <div>
                <h1 className={`${styles.headingText} text-center`}>
                    Discover Furniture With <br /> High Quality Wood{" "}
                    <img
                        className="w-12 inline-block pb-12 -ml-2"
                        src={HeroIcon}
                        alt="Hero Icon"
                    />{" "}
                </h1>

                <div className="w-3/4 max-mobile:w-full mx-auto pb-3">
                    <p className={`${styles.paragraphText} text-center pt-4`}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non.
                        Purus parturient viverra nunc, tortor sit laoreet. Quam
                        tincidunt aliquam adipiscing tempor.
                    </p>
                </div>
            </div>

            <form className="px-5 py-2 relative mt-10 bg-screenColor1 shadow-new w-3/4 mx-auto z-20 flex items-center justify-between border-[1.5px] border-screenColor2">
                <div className="flex items-center justify-start gap-4 z-20 w-4/5">
                    <img
                        className="w-6"
                        src={SearchIcon}
                        alt="Search icon"
                    />

                    <input
                        className={`${styles.navLink} w-full outline-none`}
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
