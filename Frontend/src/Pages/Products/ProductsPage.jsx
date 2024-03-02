import React from "react";
import { IoFilter } from "react-icons/io5";
import { styles } from "../../Styles/styles";
import SearchIcon from "../../assets/Search-Icon.png";
import ProductSearchComponent from "../../Components/ProductSearchComponent";

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
            <div className="my-12">
                <ProductSearchComponent />
            </div>
            <div className="pt-32">
                <h1 className={`${styles.secondaryText}`}>Products</h1>
                <div className="grid grid-cols-3 gap-5"></div>
            </div>
        </section>
    );
};

export default ProductsPage;
