import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../Styles/styles";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <section className={`max-w-2xl mx-auto p-5 h-auto my-10`}>
            <div>
                <h2 className={`${styles.secondaryText}`}>Register</h2>
                <p className={`${styles.secondaryParaText} pt-5`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem tenetur modi blanditiis eaque laudantium suscipit
                    tempore ducimus perspiciatis dolorum, voluptatum vel, illum
                    labore nulla esse aliquid ad. Excepturi, consequatur in.
                </p>
            </div>
            <form>
                <div className="mt-5">
                    <label className="text-lg font-eduoxusSans text-titleColor font-medium">
                        Name:{" "}
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full outline-none border-[1.5px] text-sm pl-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-lg font-eduoxusSans text-titleColor font-medium">
                        Email:{" "}
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full outline-none border-[1.5px] text-sm pl-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-lg font-eduoxusSans text-titleColor font-medium">
                        Password:{" "}
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full outline-none border-[1.5px] text-sm px-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-lg font-eduoxusSans text-titleColor font-medium">
                        Confirm Password:{" "}
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full outline-none border-[1.5px] text-sm px-5 rounded-md font-eduoxusSans mt-3 py-3 border-paragraphColor"
                    />
                </div>

                <div className="flex items-end justify-end flex-col">
                    <button
                        className={`${styles.navButton} px-16 font-medium mt-8`}
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RegisterPage;
