import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white text-black h-24 md:h-28 flex items-center justify-between shadow-md w-screen p-5 fixed top-0 z-50">
            
            <span className="text-3xl md:text-6xl font-josefin font-light pl-5">José & Vitoria</span>
            
            <button className="md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <nav className={`absolute md:static top-16 left-0 w-full bg-white md:w-auto md:flex md:space-x-6 px-5 md:px-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
                <NavLink path="/home" page={location.pathname}>Home</NavLink>
                <NavLink path="/history" page={location.pathname}>Nossa história</NavLink>
                <NavLink path="/gallery" page={location.pathname}>Galeria</NavLink>
                <NavLink path="/gifts" page={location.pathname}>Sugestão de presentes</NavLink>
                <NavLink path="/presence" page={location.pathname}>Confirme sua presença</NavLink>
            </nav>
        </header>
    );
}

function NavLink({ path, page, children }) {
    const isActive = page === path;
    return (
        <Link to={path} className={`block py-2 md:py-0 text-xl md:text-2xl font-josefin ${isActive ? "font-bold text-gray-800" : "text-gray-600"}`}>
            {children}
        </Link>
    );
}
