import React from "react";

export default function ButtonModal({text, onClick, isPaid}){
    return(
        <div>
            <button 
                target="_blank" 
                onClick={onClick} 
                disabled={isPaid} 
                className={`font-josefin font-semibold text-xl bg-transparent border-[4px] rounded-2xl  text-black px-2 py-1 rounded-lg ${isPaid ? "bg-gray text-white border-black" : "hover:font-bold hover:underline hover:underline-offset-1 transition-all duration-100 ease-in-out hover:bg-purple hover:text-white hover:border-gray border-purple"}`}>
                    {isPaid ? "Já comprado" : text }
            </button>
        </div>
    )
}