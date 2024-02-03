import React from "react";
import { styles } from "../../Styles/styles";
import HeroIcon from "../../assets/HeroElement-1.png";
import HeroImage from "../../assets/HeroBg.png";

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

            <div className="-z-10">
                <img
                    className="w-full -z-10 -mt-8"
                    src={HeroImage}
                    alt="Hero Image"
                />
            </div>
        </section>
    );
};

export default HeroSection;
