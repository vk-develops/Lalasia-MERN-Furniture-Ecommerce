import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import ProductSearchComponent, {
    ProductSearchFilterComponent,
} from "../../Components/ProductSearchComponent";
import Loader from "../../Components/Loader";
import ProductCard from "../../Components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);

    const search = searchParams.get("search") || null;
    const type = searchParams.get("type");
    const color = searchParams.get("color");
    const budget = searchParams.get("budget");
    const discount = searchParams.get("discount");
    console.log(discount);

    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);

            const url = `${import.meta.env.VITE_APP_BACKEND_URI}${
                import.meta.env.VITE_BACKEND_FURNITURE_PRODUCTS_URI
            }/search-products?page=${page}`;
            const fullUrl = search ? `${url}&search=${search}` : url;

            const filteredUrl = `${fullUrl}${color ? `&color=${color}` : ""}${
                type ? `&type=${type}` : ""
            }${budget ? `&budget=${budget}` : ""}${
                discount ? `&discount=${discount}` : ""
            }`;

            console.log(filteredUrl);

            const response = await fetch(filteredUrl);

            const data = await response.json();

            if (response.ok) {
                setProducts(data.data);
                setPagination(data.pagination);
                setIsLoading(false);
            } else {
                setIsError(true);
                console.log(data.message);
            }

            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [discount, budget, color, type, search, page]);

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };

    const handleToggle = () => {
        setToggleFilter(!toggleFilter);
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
                    <ProductSearchComponent toggle={handleToggle} />
                </div>
                <div className="pt-20">
                    {toggleFilter && <ProductSearchFilterComponent />}
                </div>
                <div className="pt-12">
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
