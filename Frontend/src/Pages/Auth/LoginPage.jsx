import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../../Styles/styles";
import { useLoginMutation } from "../../App/Service/usersAuthApiSlice";
import { useErrorToast } from "../../Hooks/useToast";
import { setCredentials } from "../../App/Features/usersAuthSlice";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [login, { isLoading }] = useLoginMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await login({ email, password }).unwrap();
            console.log(response);
            const userInfo = response.userInfo;
            dispatch(setCredentials(userInfo));
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
        <section className={`max-w-2xl mx-auto p-5 h-auto my-10`}>
            <div>
                <h2 className={`${styles.secondaryText}`}>Login</h2>
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
                <p className={`${styles.tertiaryParaText} pt-5`}>
                    Forgot password?{" "}
                    <Link className="text-secondaryColor">Reset now</Link>
                </p>
                <div className="flex items-end justify-end">
                    <button
                        disabled={isLoading}
                        className={`px-16 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs mt-3`}
                    >
                        {isLoading ? `Logging in...` : `Login`}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default LoginPage;
