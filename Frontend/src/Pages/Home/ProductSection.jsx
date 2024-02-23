import React from "react";
import { styles } from "../../Styles/styles";
import ProductSlider from "../../Components/ProductSlider";

const ProductSection = () => {
    return (
        <>
            {/* {isLoading && <Loader />} */}
            <section className={`${styles.layout} h-auto my-16 `}>
                <div className="flex items-center justify-center flex-col text-center">
                    <h6 className={`${styles.highlitedText}`}>Products</h6>
                    <h2 className={`${styles.secondaryText} pt-3`}>
                        Our Popular Products
                    </h2>
                    <p className={`${styles.secondaryParaText} pt-4`}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing <br /> mauris
                        non purus parturient.
                    </p>
                </div>
                <div className="my-8 pt-10 gap-8">
                    {/* {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))} */}
                    <ProductSlider />
                </div>
            </section>
        </>
    );
};

export default ProductSection;
