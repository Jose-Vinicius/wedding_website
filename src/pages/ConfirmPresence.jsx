import React from "react";

import Header from "../components/header";
import Footer from "../components/Footer";

export default function ConfirmPresence(){
    return(
        <>
            <Header/>
            <main className="w-full flex flex-col pt-[200px] pb-[300px] bg-old_paper justify-center text-center">
                <h1 className="font-amsterdan font-regular text-6xl pb-40" >Confirme sua presença</h1>
                <div className="w-full flex justify-center items-center h">
                    <form action="" className="w-full">
                        <input type="text" name="confirmPresence" id="confirmPresence" className="w-8xl text-5xl font-meaCulpa text-center caret-transparent bg-transparent border-none outline-none focus:ring-0 placeholder-gray-500" placeholder="Insira seu nome aqui..."/> 
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    )
}