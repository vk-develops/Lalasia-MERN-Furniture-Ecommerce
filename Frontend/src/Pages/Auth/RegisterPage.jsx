import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../../Styles/styles";
import { useRegisterMutation } from "../../App/Service/usersAuthApiSlice";
import { setCredentials } from "../../App/Features/usersAuthSlice";
import { useErrorToast, useSuccessToast } from "../../Hooks/useToast";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);
    useEffect(() => {
        if (userInfo) {
            console.log(userInfo);
        }
    }, [userInfo]);

    const [register, { isLoading }] = useRegisterMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            if (confirmPassword === password) {
                const response = await register({
                    name,
                    email,
                    password,
                }).unwrap();
                const userInfo = response.userInfo;
                dispatch(setCredentials({ userInfo }));
                useSuccessToast(response.message);
            } else {
                useErrorToast("Passwords does not match!");
            }
        } catch (err) {
            console.log(err.message);
            useErrorToast("Server Error!!");
        }
    };

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
            <form onSubmit={submitHandler}>
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
                        className={`px-16 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs mt-8`}
                    >
                        {isLoading ? `Registering...` : `Register`}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RegisterPage;
