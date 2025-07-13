import React from "react";

export default function ButtonRounded({text, link, onClick}) {
    return(
        <div>
            <button link={link} onClick={onClick} className="text-gray-500 border-[4px] rounded-1xl border-black hover:border-black hover:bg-gray hover:text-white p-2 w-64 rounded-3xl text-2xl duration-300 ease-in-out font-josefin font-semibold hover:drop-shadow-lg">
                {text}
            </button>
        </div>
    )
}