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

    const [isExpanded, setIsExpanded] = useState(false);

    // Check if product is null before accessing its properties
    const text = product ? product.description : null;

    // Ensure text is not null before truncating
    const truncatedText = text
        ? isExpanded
            ? text
            : `${text.slice(0, 195)}...`
        : null;

    const toggleTruncate = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <>
            {isLoading && <Loader />}
            {product && (
                <section className={`${styles.layout} h-screen my-16`}>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="w-full">
                            <img
                                src={product.imageUrls[5]}
                                alt="Product Image"
                            />
                        </div>
                        <div>
                            <h1 className={`${styles.secondaryText}`}>
                                {product.name}
                            </h1>
                            <h6 className="text-secondaryColor text-lg pt-[14px] font-medium font-eduoxusSans">
                                {product.subTitle}
                            </h6>
                            <p className={`${styles.secondaryParaText} pt-6`}>
                                {truncatedText}
                                <button
                                    onClick={() => toggleTruncate()}
                                    className="text-primaryColor text-sm font-eduoxusSans font-medium"
                                >
                                    {isExpanded ? `Read Less` : `Read More`}
                                </button>
                            </p>
                            <h1
                                className={`text-primaryColor font-eduoxusSans text-3xl font-bold mt-10`}
                            >
                                ${product.price}
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
