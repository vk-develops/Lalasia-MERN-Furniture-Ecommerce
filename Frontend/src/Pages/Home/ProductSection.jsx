import React from "react";
import { styles } from "../../Styles/styles";

const ProductSection = () => {
    return (
        <section className={`${styles.layout} h-screen mt-16 pb-4`}>
            <div className="flex items-center justify-center flex-col text-center">
                <h6 className={`${styles.highlitedText}`}>Products</h6>
                <h2 className={`${styles.secondaryText} pt-3`}>
                    Our Popular Products
                </h2>
                <p className={`${styles.secondaryParaText} pt-4`}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing <br /> mauris non purus
                    parturient.
                </p>
            </div>
        </section>
    );
};

export default ProductSection;
