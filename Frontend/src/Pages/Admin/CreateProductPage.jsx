import { useState } from "react";
import React from "react";
import { styles } from "../../Styles/styles";
import { useCreateProductMutation } from "../../App/Service/adminProductApiSlice";
import { furnitureTypes } from "../../Data/furnitureTypes";
import { useErrorToast, useSuccessToast } from "../../Hooks/useToast";
import Loader from "../../Components/Loader";

const CreateProductPage = () => {
    const [name, setName] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [starRating, setStarRating] = useState("");
    const [commonType, setCommonType] = useState("");

    const [createProduct, { isLoading, isError }] = useCreateProductMutation();

    const handleCheckboxChange = (e) => {
        setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("subTitle", subTitle);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("imageFiles", imageFiles);
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append("imageFiles", imageFiles[i]);
        }
        Object.entries(checkedItems).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append("starRating", starRating);
        formData.append("commonType", commonType);

        try {
            const response = await createProduct(formData).unwrap();

            //Extracting the response
            console.log(response);

            //Sending success message
            useSuccessToast(response.message);

            //Setting back the states as empty
            setName("");
            setSubTitle("");
            setDescription("");
            setPrice("");
            setImageFiles([]);
            setCheckedItems({});
            setStarRating("");
        } catch (err) {
            if (err.data && err.data.message) {
                useErrorToast(err.data.message);
            } else {
                console.log(err.message);
                useErrorToast("Server Error!");
            }
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <section className={`max-w-2xl mx-auto p-5 h-auto my-10 pb-8`}>
                <div>
                    <h2 className={`${styles.secondaryText}`}>
                        Create Product
                    </h2>
                    <p className={`${styles.secondaryParaText} pt-5`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem tenetur modi blanditiis eaque laudantium
                        suscipit tempore ducimus perspiciatis dolorum,
                        voluptatum vel, illum labore nulla esse aliquid ad.
                        Excepturi, consequatur in.
                    </p>
                </div>
                <form onSubmit={submitHandler}>
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
                        <input
                            className={`${styles.formInput}`}
                            type="file"
                            name="imageFiles"
                            id="imageFiles"
                            multiple
                            onChange={(e) => setImageFiles(e.target.files)}
                            required
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
                            disabled={isLoading}
                            className={`px-16 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs mt-8`}
                        >
                            {isLoading
                                ? "Creating product..."
                                : "Create Product"}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default CreateProductPage;
