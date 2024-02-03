import React from "react";
import { styles } from "../Styles/styles";
import LalasiaLogo from "../assets/Lalasia-Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full sticky top-0 z-30 border-b border-2 border-screenColor2 bg-screenColor1">
            <nav
                className={`${styles.layout} flex items-center justify-between`}
            >
                {/* Logo */}
                <img
                    className="w-28"
                    src={LalasiaLogo}
                    alt="Lalasia Logo"
                />

                {/* Navlinks */}
                <div className="flex items-center justify-center gap-7">
                    <NavLink
                        className={`${styles.navLink} hover:text-primaryColor`}
                    >
                        Products
                    </NavLink>
                    <NavLink
                        className={`${styles.navLink} hover:text-primaryColor`}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        className={`${styles.navLink} hover:text-primaryColor`}
                    >
                        Articles
                    </NavLink>
                    <NavLink
                        className={`${styles.navLink} hover:text-primaryColor`}
                    >
                        About Us
                    </NavLink>
                </div>

                {/* Cta buttons */}
                <div className="flex items-center justify-center gap-5">
                    <NavLink
                        className={`${styles.navLink} hover:text-primaryColor`}
                    >
                        Login
                    </NavLink>
                    <NavLink className={`${styles.navButton}`}>
                        Get Started
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
