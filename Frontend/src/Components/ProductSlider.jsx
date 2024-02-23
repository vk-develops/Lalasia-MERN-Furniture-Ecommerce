import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../App/Service/adminProductApiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
            <div className="relative">
                <Slider
                    ref={sliderRef}
                    className="cursor-grab"
                    {...settings}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </Slider>
                <div>
                    <button className=" absolute top-2/4 left-0 px-3 py-1 bg-primaryColor text-screenColor1">
                        B
                    </button>
                    <button className=" absolute top-2/4 right-0 px-3 py-1 bg-primaryColor text-screenColor1">
                        B
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductSlider;
