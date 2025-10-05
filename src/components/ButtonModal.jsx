import React from "react";

export default function ButtonModal({text, onClick, isGifted}){
    return(
        <div>
            <button 
                target="_blank" 
                onClick={onClick} 
                disabled={isGifted} 
                className={`
                font-josefin text-xl bg-transparent border-[4px] rounded-2xl  text-black px-3 py-2 mt-2 rounded-lg 
                ${isGifted ? 
                " font-bold text-black border-d-purple" : 
                "hover:font-bold font-semibold hover:underline hover:underline-offset-1 transition-all duration-100 ease-in-out hover:bg-purple hover:text-white hover:border-gray border-purple"
                }`}>
                    {isGifted ? "Presenteado" : text }
            </button>
        </div>
    )
}