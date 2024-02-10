import React from "react";
import { styles } from "../../Styles/styles";
import { Link } from "react-router-dom";

const AdminPage = () => {
    return (
        <section className={`${styles.layout}`}>
            <div>
                <h1 className={`${styles.secondaryText}`}>Admin page</h1>
                <Link to={`create-product`} />
            </div>
        </section>
    );
};

export default AdminPage;
