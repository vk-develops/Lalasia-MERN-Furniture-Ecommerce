import React, { useState, useEffect } from "react";
import { styles } from "../../Styles/styles";
import { useGetAProductQuery } from "../../App/Service/adminProductApiSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import ProductCard from "../../Components/ProductCard";
import { useGetRelatedProductsQuery } from "../../App/Service/productApiSlice";

const RelatedProducts = ({ product }) => {
    const [relatedProducts, setRelatedProducts] = useState(null);

    const type = product.commonType;

    const { data, isLoading, isError } = useGetRelatedProductsQuery({ type });

    useEffect(() => {
        if (data) {
            console.log(data);
            setRelatedProducts(data.data);
        } else {
            console.log(isError);
            console.log(isError);
        }
    }, [data, isError]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error occured...</h1>;
    }

    return (
        <div className="mt-10 pt-16">
            <h2
                className={`text-titleColor font-eduoxusSans text-[32px] font-bold pb-8`}
            >
                Related Products
            </h2>
            <div className="grid grid-cols-3 gap-10">
                {relatedProducts &&
                    relatedProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    );
};

const ProductDetailPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);

    const { data, isLoading, isError } = useGetAProductQuery({ id });

    useEffect(() => {
        if (data) {
            setProduct(data.data);
        }
    }, [data]);

    const [isExpanded, setIsExpanded] = useState(false);

    const text = product ? product.description : null;

    const truncatedText = text
        ? isExpanded
            ? text
            : `${text.slice(0, 195)}...`
        : null;

    const toggleTruncate = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    const handleImageSelect = (imageUrl) => {
        console.log(imageUrl);
        setSelectedImg(imageUrl);
    };

    return (
        <>
            {isLoading && <Loader />}
            {product && (
                <section className={`${styles.layout} h-auto my-16`}>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="w-full">
                            <img
                                src={
                                    selectedImg
                                        ? selectedImg
                                        : product.imageUrls[5]
                                }
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

                            <div className="mt-9 flex items-center justify-start gap-3 flex-wrap">
                                {product.imageUrls
                                    .slice()
                                    .reverse()
                                    .map((img, index) => (
                                        <button
                                            onClick={() =>
                                                handleImageSelect(img)
                                            }
                                            key={index}
                                        >
                                            <img
                                                className="w-[70px]"
                                                src={img}
                                                alt="Product Image"
                                            />
                                        </button>
                                    ))}
                            </div>

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
                                className={`text-secondaryColor font-eduoxusSans text-3xl font-medium mt-10`}
                            >
                                &#8377; {product.price}
                            </h1>
                            <div className="flex items-center justify-start gap-5 mt-10">
                                <button className="px-16 py-[10px] bg-primaryColor text-screenColor1 font-medium font-eduoxusSans text-base">
                                    Buy Now
                                </button>
                                <button className="px-16 py-[10px] bg-primaryColor text-screenColor1 font-medium font-eduoxusSans text-base">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts product={product} />
                </section>
            )}
            {isError && <div>Error fetching data</div>}
        </>
    );
};

export default ProductDetailPage;
