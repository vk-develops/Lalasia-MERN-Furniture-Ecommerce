import React from "react";
import { styles } from "../../Styles/styles";
import HomeBenefitCard from "../../Components/HomeBenefitCard";
import { benefitData } from "../../Data/benefitData";

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

            <div className="flex items-center justify-center gap-8 pt-12">
                {benefitData.map((benCard) => (
                    <HomeBenefitCard
                        key={benCard.id}
                        title={benCard.title}
                        description={benCard.description}
                        img={benCard.img}
                    />
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;
