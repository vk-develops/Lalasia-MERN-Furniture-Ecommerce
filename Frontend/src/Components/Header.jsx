import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconShoppingCart, IconChevronDown } from "@tabler/icons-react";
import { styles } from "../Styles/styles";
import LalasiaLogo from "../assets/Lalasia-Logo.png";
import useLogout from "../Hooks/useLogout";

const Header = () => {
    const { user } = useSelector((state) => state.auth);

    const { logoutHandler } = useLogout();

    const handleLogout = async () => {
        await logoutHandler();
    };

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
                                <IconShoppingCart
                                    stroke={1.5}
                                    size={24}
                                />
                            </NavLink>
                            <button onClick={handleLogout}>Logout</button>
                            <NavLink
                                to={`account/register`}
                                className={`px-4 py-3 bg-primaryColor inline-block text-screenColor1 font-eduoxusSans font-medium text-sm max-mobile:text-xs`}
                            >
                                <div className="flex items-end justify-center gap-3">
                                    <p>Account</p>
                                    <IconChevronDown size={18} />
                                </div>
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
