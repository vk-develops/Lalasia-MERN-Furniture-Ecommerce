import { useState } from "react";
import React from "react";
import { styles } from "../../Styles/styles";

const furnitureTypes = [
    "Sofa",
    "Bed",
    "Table",
    "Desk",
    "Cabinets",
    "Recliner",
    "Chair",
    "Clock",
    "Dining Table",
    "Barstool",
    "Dresser",
];

const CreateProductPage = () => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (e) => {
        setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
    };

    console.log(checkedItems);

    return (
        <section className={`max-w-2xl mx-auto p-5 h-auto my-10 pb-8`}>
            <div>
                <h2 className={`${styles.secondaryText}`}>Create Product</h2>
                <p className={`${styles.secondaryParaText} pt-5`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem tenetur modi blanditiis eaque laudantium suscipit
                    tempore ducimus perspiciatis dolorum, voluptatum vel, illum
                    labore nulla esse aliquid ad. Excepturi, consequatur in.
                </p>
            </div>
            <form>
                <div className="mt-5">
                    <label className={`${styles.label}`}>Product Name: </label>
                    <input
                        className={`${styles.formInput}`}
                        type="text"
                        placeholder="Enter the name of the product"
                    />
                </div>
                <div className="mt-5">
                    <label className={`${styles.label}`}>
                        Product Sub Title:{" "}
                    </label>
                    <input
                        className={`${styles.formInput}`}
                        type="text"
                        placeholder="Enter the sub title of the product"
                    />
                </div>
                <div className="mt-5">
                    <label className={`${styles.label}`}>
                        Product description:{" "}
                    </label>
                    <textarea
                        placeholder="Enter the description of the product"
                        className="w-full pt-5 h-40 outline-none border-[1.5px] text-sm pl-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                    ></textarea>
                </div>
                <div className="mt-5">
                    <label className={`${styles.label}`}>Product Price: </label>
                    <input
                        className={`${styles.formInput}`}
                        type="text"
                        placeholder="Enter the price of the product"
                    />
                </div>
                <div className="mt-5">
                    <label className={`${styles.label}`}>
                        Product Rating:{" "}
                    </label>
                    <select className="border-[1.5px] border-paragraphColor mt-3 px-5 pr-5 font-eduoxusSans rounded-lg w-full p-2 text-paragraphColor outline-none font-normal">
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
                <div className="mt-5 py-8 grid grid-cols-4 gap-2">
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
                                checked={checkedItems[furniture] || false}
                                onChange={handleCheckboxChange}
                                className="hidden"
                            />
                            {furniture}
                        </label>
                    ))}
                </div>

                <div className="flex items-end justify-end">
                    <button
                        className={`px-16 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs mt-8`}
                    >
                        Create Product
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateProductPage;
