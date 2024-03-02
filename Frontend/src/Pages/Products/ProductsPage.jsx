import React from "react";
import { styles } from "../../Styles/styles";

const ProductsPage = () => {
    return (
        <section className={`${styles.layout} h-screen mt-8`}>
            <div>
                <h1 className={`${styles.headingText} text-center`}>
                    Products
                </h1>
                <p className={`${styles.paragraphText} text-center pt-4`}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non. Purus
                    parturient viverra nunc, tortor sit laoreet. Quam tincidunt
                    aliquam adipiscing tempor.
                </p>
            </div>
        </section>
    );
};

export default ProductsPage;
