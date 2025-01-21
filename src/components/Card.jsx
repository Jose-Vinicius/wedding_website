import React from "react";

export default function Card({ title, text, icon }) {
    return (
        <div className="w-80 h-80 bg-transparent border-[5px] rounded-2xl border-purple text-center flex flex-col justify-between items-center">
            <img className="pt-5" src={`src/assets/icons/${icon}`} alt={title}/>
            <p className="font-josefin text-3xl flex-grow flex items-center">{text}</p>
            <span className="font-amsterdan text-2xl mb-4">{title}</span>
        </div>
    )
}