import React, { useEffect, useState } from "react";
import { styles } from "../../Styles/styles";
import {
    useGetAProductQuery,
    useUpdateProductMutation,
} from "../../App/Service/adminProductApiSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import { furnitureTypes } from "../../Data/furnitureTypes";
import { useSuccessToast } from "../../Hooks/useToast";
import NormalBackButton from "../../Components/NormalBackButton";

const UpdateProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [name, setName] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [starRating, setStarRating] = useState("");
    const [commonType, setCommonType] = useState("");
    const [deletedImageUrls, setDeletedImageUrls] = useState([]);

    const {
        data,
        isLoading: getProductLoading,
        isError,
        refetch: refetchProduct,
    } = useGetAProductQuery({ id });

    const [updateProduct, { isLoading: updateProductLoading }] =
        useUpdateProductMutation();

    const handleCheckboxChange = (e) => {
        setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
    };

    useEffect(() => {
        if (data) {
            setProduct(data.data);
        }
    }, [data]);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setSubTitle(product.subTitle);
            setDescription(product.description);
            setPrice(product.price);
            setStarRating(product.starRating);
            setCommonType(product.commonType);
            setImageFiles(product.imageUrls);

            const initialCheckedItems = {};
            furnitureTypes.forEach(
                (furniture) =>
                    (initialCheckedItems[furniture] =
                        product.type.includes(furniture))
            );

            setCheckedItems(initialCheckedItems);
        }
    }, [product]);

    if (isError) {
        return <h1>Error Occured</h1>;
    }

    const handleImageDelete = (e, imageUrl) => {
        e.preventDefault();
        setDeletedImageUrls((prevDeletedImageUrls) => [
            ...prevDeletedImageUrls,
            imageUrl,
        ]);
        setImageFiles(imageFiles.filter((url) => url != imageUrl));
    };

    const updateHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("subTitle", subTitle);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("imageFiles", imageFiles);
        // Append existing and newly selected image files
        imageFiles.forEach((img) => {
            formData.append("imageFiles", img);
        });
        Object.entries(checkedItems).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append("starRating", starRating);
        formData.append("commonType", commonType);
        formData.append("deletedImageUrls", JSON.stringify(deletedImageUrls));

        try {
            const response = await updateProduct({
                id,
                data: formData,
            }).unwrap();

            //Extracting the response
            console.log(response);

            //Sending success message
            useSuccessToast(response.message);

            //Re fetching the product
            refetchProduct();
        } catch (error) {
            console.log(error.message);
        }
    };

    console.log(imageFiles);

    return (
        <>
            {getProductLoading && <Loader />}
            {updateProductLoading && <Loader />}
            <section className={`max-w-2xl mx-auto p-5 h-auto my-10 pb-8`}>
                <NormalBackButton
                    backTo={"../"}
                    buttonText={"Back to admin page"}
                />
                <div className="mt-8">
                    <h2 className={`${styles.secondaryText}`}>
                        Update Product
                    </h2>
                    <p className={`${styles.secondaryParaText} pt-5`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem tenetur modi blanditiis eaque laudantium
                        suscipit tempore ducimus perspiciatis dolorum,
                        voluptatum vel, illum labore nulla esse aliquid ad.
                        Excepturi, consequatur in.
                    </p>
                </div>
                <form onSubmit={(e) => updateHandler(e)}>
                    <div className="mt-7">
                        <label className={`${styles.formLabel}`}>
                            Product Name:{" "}
                        </label>
                        <input
                            className={`${styles.formInput}`}
                            type="text"
                            placeholder="Enter the name of the product"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-7">
                        <label className={`${styles.formLabel}`}>
                            Product Sub Title:{" "}
                        </label>
                        <input
                            className={`${styles.formInput}`}
                            type="text"
                            placeholder="Enter the sub title of the product"
                            value={subTitle}
                            required
                            onChange={(e) => setSubTitle(e.target.value)}
                        />
                    </div>
                    <div className="mt-7">
                        <label className={`${styles.formLabel}`}>
                            Product description:{" "}
                        </label>
                        <textarea
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter the description of the product"
                            className="w-full pt-5 h-40 outline-none border-[1.5px] text-sm pl-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                        ></textarea>
                    </div>
                    <div className="mt-7">
                        <label className={`${styles.formLabel}`}>
                            Product Price:{" "}
                        </label>
                        <input
                            className={`${styles.formInput}`}
                            type="text"
                            placeholder="Enter the price of the product"
                            value={price}
                            required
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mt-7">
                        <label
                            htmlFor="imageFiles"
                            className={`${styles.formLabel}`}
                        >
                            Product Image:{" "}
                        </label>
                        {imageFiles.length > 0 && (
                            <div className="w-full flex items-center justify-start gap-3 flex-wrap border-[1.5px] border-paragraphColor p-2 my-2 mt-5 rounded-md">
                                {imageFiles
                                    .slice()
                                    .reverse()
                                    .map((img, index) => (
                                        <div
                                            className="relative group rounded-sm overflow-hidden"
                                            key={index}
                                        >
                                            <img
                                                className="w-32 h-32"
                                                src={`${img}`}
                                                alt="Product Image"
                                            />
                                            <button
                                                onClick={(e) =>
                                                    handleImageDelete(
                                                        e,
                                                        `${img}`
                                                    )
                                                }
                                                style={{
                                                    background:
                                                        "rgba(17, 17, 17, .5)",
                                                    backdropFilter: "blur(5px)",
                                                }}
                                                className="absolute h-full w-full -bottom-full transition-all left-0 text-screenColor1 font-eduoxusSans text-base group-hover:bottom-0"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))}
                            </div>
                        )}
                        <input
                            className={`${styles.formInput}`}
                            type="file"
                            name="imageFiles"
                            id="imageFiles"
                            multiple
                            onChange={(e) =>
                                setImageFiles([
                                    ...imageFiles,
                                    ...e.target.files,
                                ])
                            }
                        />
                    </div>
                    <div className="mt-7">
                        <label className={`${styles.formLabel}`}>
                            Product Rating:{" "}
                        </label>
                        <select
                            value={starRating}
                            required
                            onChange={(e) => setStarRating(e.target.value)}
                            className="border-[1.5px] border-paragraphColor mt-3 px-5 pr-5 font-eduoxusSans rounded-lg w-full p-2 text-paragraphColor outline-none font-normal"
                        >
                            <option value="">Select an option</option>
                            {[1, 2, 3, 4, 5].map((num, index) => (
                                <option
                                    key={index}
                                    value={num}
                                >
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-7">
                        <label className={`${styles.formLabel}`}>
                            Product Common Type:{" "}
                        </label>
                        <select
                            value={commonType}
                            required
                            onChange={(e) => setCommonType(e.target.value)}
                            className="border-[1.5px] border-paragraphColor mt-3 px-5 pr-5 font-eduoxusSans rounded-lg w-full p-2 text-paragraphColor outline-none font-normal"
                        >
                            <option value="">Select an option</option>
                            {furnitureTypes.map((type, index) => (
                                <option
                                    key={index}
                                    value={type}
                                >
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-8">
                        <label className={`${styles.formLabel}`}>
                            Product Type:
                        </label>

                        <div className="pb-8 pt-6 grid grid-cols-4 gap-2">
                            {furnitureTypes.map((furniture, index) => (
                                <label
                                    key={index}
                                    className={`${
                                        checkedItems[furniture]
                                            ? `bg-secondaryColor text-screenColor1`
                                            : `bg-screenColor2`
                                    } cursor-pointer text-center font-eduoxusSans font-medium text-sm rounded-full px-4 py-2`}
                                >
                                    <input
                                        type="checkbox"
                                        name={furniture}
                                        checked={
                                            checkedItems[furniture] || false
                                        }
                                        onChange={handleCheckboxChange}
                                        className="hidden"
                                    />
                                    {furniture}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-end justify-end">
                        <button
                            disabled={updateProductLoading}
                            className={`px-16 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs mt-8`}
                        >
                            {updateProductLoading
                                ? "Updating..."
                                : "Update Product"}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default UpdateProduct;
