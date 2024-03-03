import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import ProductSearchComponent from "../../Components/ProductSearchComponent";
import { useGetSearchProductsQuery } from "../../App/Service/productApiSlice";
import Loader from "../../Components/Loader";
import ProductCard from "../../Components/ProductCard";

const ProductsPage = () => {
    const { data, isLoading, isError } = useGetSearchProductsQuery();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (data) {
            console.log(data);
            setProducts(data.data);
        }
    }, [data]);

    if (isError) {
        return <h1>Error no products found</h1>;
    }

    return (
        <>
            {isLoading && <Loader />}
            <section className={`${styles.layout} h-auto mt-8`}>
                <div>
                    <h1 className={`${styles.headingText} text-center`}>
                        Products
                    </h1>
                    <p className={`${styles.paragraphText} text-center pt-4`}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget
                        ipsum dignissim placerat nisi, adipiscing mauris non.
                        Purus parturient viverra nunc, tortor sit laoreet. Quam
                        tincidunt aliquam adipiscing tempor.
                    </p>
                </div>
                <div className="my-12">
                    <ProductSearchComponent />
                </div>
                <div className="pt-32">
                    <h1 className={`${styles.secondaryText}`}>Products</h1>
                    <div className="grid grid-cols-3 gap-5 mt-8">
                        {products &&
                            products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;
