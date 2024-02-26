import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../App/Service/adminProductApiSlice";
import Loader from "../../Components/Loader";
import { IoMdEye } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

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
                    <div className="max-w-full overflow-x-scroll">
                        <table className="w-full border border-paragraphColor">
                            <thead>
                                <tr
                                    style={{
                                        color: "#ffffff",
                                        fontWeight: 500,
                                    }}
                                    className="bg-primaryColor text-white whitespace-nowrap"
                                >
                                    <th className="border border-paragraphColor p-4">
                                        ID
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Name
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        SubTitle
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Description
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Price
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Rating
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Common type
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        View
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Update
                                    </th>
                                    <th className="border border-paragraphColor p-4">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products &&
                                    products.map((product) => (
                                        <tr className="text-center">
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {product._id}
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {product.name}
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {product.subTitle}
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {`${product.description.slice(
                                                    0,
                                                    50
                                                )}...`}
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {product.price}
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {product.starRating}
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                {product.commonType}
                                            </td>
                                            <td className="hover:bg-screenColor2 border flex items-center justify-center whitespace-nowrap p-4 border-paragraphColor">
                                                <Link
                                                    to={`/products/${product._id}`}
                                                >
                                                    {" "}
                                                    <IoMdEye
                                                        style={{
                                                            color: "#518581",
                                                        }}
                                                        size={24}
                                                    />
                                                </Link>
                                            </td>
                                            <td className="hover:bg-screenColor2 border whitespace-nowrap p-4 border-paragraphColor">
                                                <Link
                                                    to={`update-product/${product._id}`}
                                                >
                                                    {" "}
                                                    <FiEdit
                                                        style={{
                                                            color: "#518581",
                                                            marginLeft: 15,
                                                        }}
                                                        size={24}
                                                    />
                                                </Link>
                                            </td>
                                            <td className="hover:bg-screenColor2 flex items-center justify-center flex-row border whitespace-nowrap p-4 border-paragraphColor">
                                                <Link>
                                                    {" "}
                                                    <MdDeleteOutline
                                                        style={{
                                                            color: "#518581",
                                                        }}
                                                        size={24}
                                                    />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminPage;
