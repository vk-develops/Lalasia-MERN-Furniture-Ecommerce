import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import ProductCard from "../../Components/ProductCard";
import { useGetAllProductsQuery } from "../../App/Service/adminProductApiSlice";
import Loader from "../../Components/Loader";

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    const { data, isLoading, isError } = useGetAllProductsQuery();

    useEffect(() => {
        if (data) {
            setProducts(data.data);
        }
    }, [data]);

    console.log(products);

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
                <div className="my-8 flex items-center pt-10 justify-between gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductSection;
