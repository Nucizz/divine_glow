import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Divine Glow Logo.png";
import Headroom from "react-headroom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { WhatsApp } from "@mui/icons-material";

export default function Navbar({ active, transparent = false }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const navItems = [
        { to: "/home", label: "Beranda" },
        { to: "/product", label: "Produk" },
        { to: "/aboutus", label: "Tentang Kami" },
    ];

    return (
        <Headroom className="absolute z-50">
            {/* Navbar */}
            <nav
                className={
                    "w-screen relative p-4 flex justify-between items-center z-50 h-20 " +
                    ((!transparent || isMobileMenuOpen) && "bg-secondary")
                }
            >
                <button
                    className="text-3xl font-bold leading-none w-1/3"
                    onClick={scrollToTop}
                >
                    <img className="w-10 h-10" src={logo} alt="Logo" />
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-6 w-1/3 justify-center">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                className={
                                    "text-sm text-white font-semibold transition-all duration-300 " +
                                    (active === index
                                        ? "bg-primary rounded-xl py-2 px-6 bg-tertiary-hover "
                                        : "hover:text-gray-300")
                                }
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="w-1/3 flex flex-row justify-end">
                    <a
                        className="flex-row gap-2 items-center hidden lg:flex py-2 px-4 bg-white hover:bg-gray-300 text-sm text-black font-bold rounded-xl transition duration-300"
                        href="https://wa.me/+6287891992727"
                    >
                        <WhatsApp />
                        <div>Hubungi Penjual</div>
                    </a>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-white p-3"
                        onClick={toggleMobileMenu}
                    >
                        { isMobileMenuOpen ?
                        <CloseRoundedIcon /> :
                        <MenuRoundedIcon /> }
                    </button>

                    {/* Mobile Navigation Overlay */}
                        <div className={"navbar-menu fixed top-0 left-0 right-0 w-screen z-40 transition-all duration-300 " + (isMobileMenuOpen ? "translate-y-0 mt-20 bg-primary" : "-translate-y-full mt-0 bg-secondary")}>
                            <div className="flex flex-col py-2 px-4">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.to}
                                        className={
                                            "text-white font-semibold text-lg w-full p-2 transition-all duration-300 " +
                                            (index !== 0
                                                && "border-t"
                                                )
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                    </Link>
                                    
                                ))}
                                <a
                                    className="flex flex-row gap-2 items-center justify-center text-center my-2 py-2 px-4 bg-white text-sm text-black font-bold rounded-xl"
                                    href="https://wa.me/+6287891992727"
                                >
                                    <WhatsApp />
                                    <div>Hubungi Penjual</div>
                                </a>
                            </div>
                        </div>
                    
                </div>
            </nav>
        </Headroom>
    );
}
