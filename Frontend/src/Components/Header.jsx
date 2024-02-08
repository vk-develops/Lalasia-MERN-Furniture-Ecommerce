import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { styles } from "../Styles/styles";
import LalasiaLogo from "../assets/Lalasia-Logo.png";

const Header = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <header className="w-full sticky top-0 z-30  border-b-[1.5px] border-screenColor2 bg-screenColor1">
            <nav
                className={`${styles.layout} flex items-center justify-between`}
            >
                {/* Logo */}
                <NavLink to={`/`}>
                    <img
                        className="w-28"
                        src={LalasiaLogo}
                        alt="Lalasia Logo"
                    />
                </NavLink>

                {/* Navlinks */}
                <div className="flex items-center justify-center gap-7">
                    <NavLink
                        to={`products`}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} text-primaryColor`
                                : `${styles.navLink} hover:text-primaryColor`
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} text-primaryColor`
                                : `${styles.navLink} hover:text-primaryColor`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} text-primaryColor`
                                : `${styles.navLink} hover:text-primaryColor`
                        }
                    >
                        Articles
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} text-primaryColor`
                                : `${styles.navLink} hover:text-primaryColor`
                        }
                    >
                        About Us
                    </NavLink>
                </div>

                {/* Cta buttons */}
                <div className="flex items-center justify-center gap-5">
                    {user ? (
                        <>
                            <NavLink
                                to={`account/login`}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} text-primaryColor`
                                        : `${styles.navLink} hover:text-primaryColor`
                                }
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to={`account/register`}
                                className={`${styles.navButton}`}
                            >
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to={`account/login`}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} text-primaryColor`
                                        : `${styles.navLink} hover:text-primaryColor`
                                }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to={`account/register`}
                                className={`${styles.navButton}`}
                            >
                                Get Started
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
