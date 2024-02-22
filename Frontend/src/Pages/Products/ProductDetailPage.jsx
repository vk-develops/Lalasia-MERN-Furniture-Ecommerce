import React, { useState, useEffect } from "react";
import { styles } from "../../Styles/styles";
import { useGetAProductQuery } from "../../App/Service/adminProductApiSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const ProductDetailPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const { data, isLoading, isError } = useGetAProductQuery({ id });

    useEffect(() => {
        if (data) {
            setProduct(data.data);
        }
    }, [data]);

    return (
        <>
            {isLoading && <Loader />}
            {product && (
                <section className={`${styles.layout} h-screen my-16`}>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="w-full">
                            <img
                                src={product.imageUrls[0]}
                                alt="Product Image"
                            />
                        </div>
                        <div>
                            <h1 className={`${styles.secondaryText}`}>
                                {product.name}
                            </h1>
                        </div>
                    </div>
                </section>
            )}
            {isError && <div>Error fetching data</div>}
        </>
    );
};

export default ProductDetailPage;
