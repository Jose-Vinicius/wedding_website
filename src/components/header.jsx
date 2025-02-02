import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header(){
    const location = useLocation()

    return(
        <header className="bg-white text-black flex items-center shadow-md w-full p-5 fixed top-0 z-50">
            <span className="text-6xl font-josefin font-light pl-10">José & Vitoria</span>
            {navEmphasisPage(location.pathname)}
        </header>
    )
}

function navEmphasisPage(page){
    return(
        <nav className="flex space-x-6 ml-auto">
            <NavLink path="/home" page={page} className="font-josefin text-2xl">Home</NavLink>
            <NavLink path="/history" page={page} className="font-josefin text-2xl">Nossa historia</NavLink>
            <NavLink path="/gallery" page={page} className="font-josefin text-2xl">Galeria</NavLink>
            <NavLink path="/gifts" page={page} className="font-josefin text-2xl">Sugestão de presentes</NavLink>
            <NavLink path="/presence" page={page} className="font-josefin text-2xl">Confirme sua presença</NavLink>
        </nav>
    )
}

function NavLink({path, page, children}){
    const urlPathActive = page === path;
    return(
        <Link to={path} className={`font-josefin text-2xl ${urlPathActive ? "font-bold" : ""}`}>
            {children}
        </Link>
    )

}