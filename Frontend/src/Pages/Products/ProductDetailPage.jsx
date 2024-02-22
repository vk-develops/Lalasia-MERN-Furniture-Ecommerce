import React, { useState, useEffect } from "react";
import { styles } from "../../Styles/styles";
import { useGetAProductQuery } from "../../App/Service/adminProductApiSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const ProductDetailPage = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useGetAProductQuery({ id });

    return (
        <>
            {isLoading && <Loader />}
            {data && data.data && (
                <section className={`${styles.layout} h-screen my-16`}>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="w-full">
                            <img
                                src={data.data.imageUrls[0]}
                                alt="Product Image"
                            />
                        </div>
                        <div>
                            <h1>fdf</h1>
                        </div>
                    </div>
                </section>
            )}
            {isError && <div>Error fetching data</div>}
        </>
    );
};

export default ProductDetailPage;
