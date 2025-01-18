import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export function Home(){
    return(
        <>
        <Header />
        <main className="flex-grow pt-[100px]">
            <div id="banner" className="text-center w-full bg-old_paper h-96">
                <p className="font-amsterdan text-6xl py-20">José e Vitoria</p>
                <p className="font-josefin font-light text-5xl py-10">22 de Novembro de 2025</p>
            </div>
            <div id="counter" className="text-center w-full bg-white h-96 flex justify-center items-center gap-x-[50px]">
                <div className="flex flex-col items-center">
                    <span className="font-adamina text-5xl">235</span>
                    <span className="font-thin text-3xl">Dias</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-adamina text-5xl">23</span>
                    <span className="font-thin text-3xl">Horas</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-adamina text-5xl">56</span>
                    <span className="font-thin text-3xl">Minutos</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-adamina text-5xl">32</span>
                    <span className="font-thin text-3xl">Segundos</span>
                </div>
            </div>
            <div id="our_history" className="w-full bg-old_paper h-96 flex flex-col justify-center items-center">
                <h2 className="font-amsterdan text text-6xl py-20">Nossa historia</h2>
                <div className="flex justify-around w-full">
                    <div className="h-2">
                        <h2>Como nos conhecemos</h2>
                        <span></span>
                    </div>
                    <div className="h-2">
                        <h2>Nossa trajetoria</h2>
                        <span></span>
                    </div>
                    <div className="h-2">
                        <h2>O pedido</h2>
                        <span></span>
                    </div>
                </div>
                
            </div>

        </main>
        <Footer />
        </>
    )
}
