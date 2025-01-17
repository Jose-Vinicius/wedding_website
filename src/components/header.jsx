import React from "react";

export default function Header(){
    return(
        <header className="bg-white text-black flex  items-center shadow-md w-screen p-5">
            <span className="text-6xl font-josefin font-light pl-10">José & Vitoria</span>
            <nav className="flex space-x-6 ml-auto">
                <a href="" className="font-josefin text-2xl font-bold">Home</a>
                <a href="" className="font-josefin text-2xl">Nossa historia</a>
                <a href="" className="font-josefin text-2xl">Galeria</a>
                <a href="" className="font-josefin text-2xl">Sugestão de presentes</a>
                <a href="" className="font-josefin text-2xl">Confirme sua presença</a>
            </nav>
        </header>
    )
}