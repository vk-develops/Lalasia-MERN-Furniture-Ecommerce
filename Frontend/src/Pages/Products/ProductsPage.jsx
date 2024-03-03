import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import ProductSearchComponent from "../../Components/ProductSearchComponent";
import { useGetSearchProductsQuery } from "../../App/Service/productApiSlice";
import Loader from "../../Components/Loader";
import ProductCard from "../../Components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);

    const searchedProduct = searchParams.get("search");
    console.log(searchedProduct);
    console.log(page);

    const { data, isLoading, isError } = useGetSearchProductsQuery(page);
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);

    useEffect(() => {
        if (data) {
            console.log(data);
            setProducts(data.data);
            setPagination(data.pagination);
        }
    }, [data]);

    if (isError) {
        return <h1>Error no products found</h1>;
    }

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };

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
                <div className="text-center mt-12">
                    {pagination &&
                        pagination.totalPages &&
                        Array.from(
                            { length: pagination.totalPages },
                            (_, index) => index + 1
                        ).map((pageNumber) => (
                            <button
                                className="px-5 py-3 bg-primaryColor text-screenColor1 text-base font-eduoxusSans font-medium m-3"
                                key={pageNumber}
                                onClick={() => handlePageClick(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}
                </div>
            </section>
        </>
    );
};

export default ProductsPage;
