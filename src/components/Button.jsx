import React from "react";

export default function Button({text, link}){
    return(
        <div>
            <a href={link} target="_blank" className="font-josefin font-semibold text-xl text-black px-2 py-1 rounded-lg hover:font-bold hover:underline hover:underline-offset-1 transition-all duration-100 ease-in-out">{text}</a>
        </div>
    )
}