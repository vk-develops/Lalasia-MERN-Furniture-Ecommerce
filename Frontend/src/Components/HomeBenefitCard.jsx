import React from "react";
import { styles } from "../Styles/styles";

const HomeBenefitCard = ({ title, img, description }) => {
    return (
        <div className="w-full p-5 bg-screenColor1 shadow-new rounded-lg border-[1.5px] border-screenColor2 mt-5 transition-all hover:-translate-y-4">
            <div className="bg-placeholderColor p-2 inline-block rounded-full">
                <img
                    className="w-6"
                    src={img}
                    alt="icon"
                />
            </div>

            <h4 className={`${styles.tertiaryText} pt-4`}>{title}</h4>
            <p className={`${styles.tertiaryParaText} pt-3`}>{description}</p>
        </div>
    );
};

export default HomeBenefitCard;
