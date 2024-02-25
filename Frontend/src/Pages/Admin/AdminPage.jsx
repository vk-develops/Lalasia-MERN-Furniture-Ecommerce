import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../App/Service/adminProductApiSlice";
import Loader from "../../Components/Loader";
import ProductCard from "../../Components/ProductCard";

const AdminPage = () => {
    const [products, setProducts] = useState(null);
    const { data, isLoading, isError } = useGetAllProductsQuery();

    useEffect(() => {
        if (data) {
            console.log(data);
            setProducts(data.data);
        }
    }, [data, isError]);

    if (isError) {
        return <h1>Error Occured...</h1>;
    }

    return (
        <>
            {isLoading && <Loader />}
            <section className={`${styles.layout} h-auto`}>
                <div className="my-10 text-center">
                    <h1 className={styles.headingText}>Admin Pannel</h1>
                    <p className={`${styles.paragraphText} pt-4`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum impedit vero id similique incidunt veniam
                        placeat est eius exercitationem. Fugit optio aperiam vel
                        dignissimos fuga expedita totam suscipit quod
                        voluptates?
                    </p>
                </div>
                <div className="pt-10">
                    <h2 className={`${styles.secondaryText}`}>
                        Furniture Products
                    </h2>
                    <div className="grid grid-cols-3 gap-10 pt-10">
                        {products &&
                            products.map((product) => (
                                <Link
                                    to={`update-product/${product._id}`}
                                    key={product._id}
                                >
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminPage;
