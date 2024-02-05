import React from "react";
import { styles } from "../../Styles/styles";

const LoginPage = () => {
    return (
        <section className={`max-w-2xl mx-auto p-5 h-screen my-10`}>
            <div>
                <h2 className={`${styles.secondaryText}`}>Login</h2>
                <p className={`${styles.secondaryParaText} pt-5`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem tenetur modi blanditiis eaque laudantium suscipit
                    tempore ducimus perspiciatis dolorum, voluptatum vel, illum
                    labore nulla esse aliquid ad. Excepturi, consequatur in.
                </p>
            </div>
        </section>
    );
};

export default LoginPage;
