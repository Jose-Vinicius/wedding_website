import React from "react";

export default function Card({ title, text, subText, icon }) {
    return (
        <div className="w-60 md:w-80 md:h-80 h-60 bg-transparent border-[5px] rounded-2xl border-purple text-center flex flex-col items-center justify-between">
            <img className="pt-5" src={getIcon(icon)} alt={title}/>
            <div>
                <p className={`font-josefin text-2xl md:text-3xl items-center ${icon == "wear.png" ? 'underline' : ''}`}>{text}</p>
                <p className="font-josefin text-2xl md:text-3xl items-center">{subText}</p>
            </div>
            
            <span className="font-amsterdan text-1xl md:text-2xl mb-4">{title}</span>
        </div>
    )
}


function getIcon(icon){
    const urlImage = "https://ik.imagekit.io/spwzgep58/icons/"

    return `${urlImage}${icon}`;
}