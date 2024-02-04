import React from "react";
import { styles } from "../../Styles/styles";

const BenefitsSection = () => {
    return (
        <section className={`${styles.layout} h-auto my-10`}>
            <div className="mt-10 flex items-end justify-between gap-5">
                <div>
                    <h6 className={`${styles.highlitedText}`}>Benefits</h6>
                    <h2 className={`${styles.secondaryText} pt-3`}>
                        Benefits when using <br /> our services
                    </h2>
                </div>

                <p className={`${styles.secondaryParaText}`}>
                    Pellentesque etiam blandit in tincidunt at donec. <br />{" "}
                    Eget ipsum dignissim placerat nisi, <br /> adipiscing mauris
                    non purus parturient.
                </p>
            </div>
        </section>
    );
};

export default BenefitsSection;
