import React from "react";
import SquareImg from "../assets/SquareImg.png";
import { styles } from "../Styles/styles";

const HomeBenefitCard = () => {
    return (
        <div className="w-full p-5 bg-screenColor1 shadow-new rounded-lg border-[1.5px] border-screenColor2  mt-5">
            <div className="bg-placeholderColor p-2 inline-block rounded-full">
                <img
                    className="w-6"
                    src={SquareImg}
                    alt="icon"
                />
            </div>

            <h4 className={`${styles.tertiaryText} pt-4`}>Many Choices</h4>
            <p className={`${styles.tertiaryParaText} pt-3`}>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
            </p>
        </div>
    );
};

export default HomeBenefitCard;
