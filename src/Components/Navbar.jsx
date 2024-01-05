import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Divine Glow Logo.png";
import Headroom from 'react-headroom'

export default function Navbar({ active, transparent=false }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <Headroom className="absolute z-50 h-14">
            {/* Navbar */}
            <nav className={"w-screen relative px-4 py-4 flex justify-between items-center " + (!transparent && "bg-secondary")}>
                <a className="text-3xl font-bold leading-none w-1/3" href="#">
                    <img className="w-10 h-10" src={logo} alt="Logo" />
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-6 w-1/3 justify-center">
                    <li>
                        <Link
                            to="/home"
                            className={
                                "text-sm text-white font-semibold transition-all duration-300 " +
                                (active === 0
                                    ? "bg-primary rounded-xl py-2 px-6 bg-tertiary-hover"
                                    : "hover:text-gray-300")
                            }
                            onClick={toggleMobileMenu}
                        >
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/product"
                            className={
                                "text-sm text-white font-semibold transition-all duration-300 " +
                                (active === 1
                                    ? "bg-primary rounded-xl py-2 px-6 bg-tertiary-hover"
                                    : "hover:text-gray-300")
                            }
                            onClick={toggleMobileMenu}
                        >
                            Produk
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutus"
                            className={
                                "text-sm text-white font-semibold transition-all duration-300 " +
                                (active === 2
                                    ? "bg-primary rounded-xl py-2 px-6 bg-tertiary-hover"
                                    : "hover:text-gray-300")
                            }
                            onClick={toggleMobileMenu}
                        >
                            Tentang Kami
                        </Link>
                    </li>
                </ul>

                <div className="w-1/3 flex flex-row justify-end">
                    <a
                        className="hidden lg:inline-block py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm text-black font-bold rounded-xl transition duration-300"
                        href="https://wa.me/+6287891992727"
                    >
                        Chat Whatsapp
                    </a>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-white p-3"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="navbar-menu relative z-50 lg:hidden">
                    <div
                        className="navbar-backdrop fixed inset-0 bg-black/50"
                        onClick={closeMobileMenu}
                    ></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a
                                className="mr-auto text-3xl font-semibold leading-none flex flex-row items-center gap-5"
                                href="#"
                            >
                                <img className="w-10 h-10" src={logo} alt="Logo" />
                                <span className="text-white">DIVINE GLOW</span>
                            </a>
                            <button className="navbar-close" onClick={closeMobileMenu}>
                                <svg
                                    className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link
                                        to="/home"
                                        className=" text-white font-semibold transition-all duration-300 "
                                        onClick={toggleMobileMenu}
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/product"
                                        className=" text-white font-semibold transition-all duration-300 "
                                        onClick={toggleMobileMenu}
                                    >
                                        Produk
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/aboutus"
                                        className=" text-white font-semibold transition-all duration-300 "
                                        onClick={toggleMobileMenu}
                                    >
                                        Tentang Kami
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        className="inline-block lg:hidden py-2 px-4 bg-gray-50 hover:bg-gray-300 text-sm text-black font-bold rounded-xl transition duration-300"
                                        href="https://wa.me/+6287891992727"
                                    >
                                        Chat Whatsapp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )}
        </Headroom>
    );
}
