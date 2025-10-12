import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            MiLogo
                        </Link>
                    </div>

                    {/* Menú principal (desktop) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive("/") ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                                }`}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/servicios"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive("/servicios") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                            >
                                Servicios
                            </Link>
                            <Link
                                to="/acerdade"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive("/acerdade") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                            >
                                Acerca de
                            </Link>
                            <Link
                                to="/contacto"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive("/contacto") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                                }`}
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>

                    {/* Botón móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                        >
                            {/* Icono hamburguesa */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            <div className={`md:hidden ${isOpen ? "" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive("/") ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/servicios"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive("/servicios") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Servicios
                    </Link>
                    <Link
                        to="/acerdade"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive("/acerdade") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Acerca de
                    </Link>
                    <Link
                        to="/contacto"
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive("/contacto") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;