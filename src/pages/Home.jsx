import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Embed_maps from "../components/Embed_maps";
import Card from "../components/Card";
import Clock from "../components/Clock";

export function Home() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-[100px]">

                <section id="banner" className="text-center w-full bg-old_paper min-h-screen flex flex-col justify-center items-center px-4">
                    <p className="font-amsterdan text-4xl sm:text-6xl md:text-7xl py-6 sm:py-10">José e Vitória</p>
                    <p className="font-josefin font-light text-xl sm:text-3xl md:text-4xl py-4 sm:py-6">22 de Novembro de 2025</p>
                </section>

                <section id="counter" className="text-center w-full bg-white min-h-[150px] md:min-h-[350px]  flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-10 px-4">
                    <Clock />
                </section>

                <section id="our_history" className="w-full bg-old_paper flex flex-col justify-center items-center py-10 sm:py-20 px-4">
                    <h2 className="font-amsterdan text-4xl sm:text-6xl py-6 sm:py-10">Nossa história</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 sm:p-8 flex flex-col items-start shadow-xl rounded-lg">
                            <h2 className="text-lg sm:text-xl font-josefin font-light text-center pb-3.5">Como nos conhecemos</h2>
                            <span className="text-justify">Nos conhecemos em 2018, no colégio agrícola... <a href="#">...</a></span>
                        </div>
                        <div className="bg-white p-6 sm:p-8 flex flex-col items-start shadow-xl rounded-lg">
                            <h2 className="text-lg sm:text-xl font-josefin font-light text-center pb-3.5">Nossa trajetória</h2>
                            <span className="text-justify">Em 2021, nossa relação deu um passo importante... <a href="#">...</a></span>
                        </div>
                        <div className="bg-white p-6 sm:p-8 flex flex-col items-start shadow-xl rounded-lg">
                            <h2 className="text-lg sm:text-xl font-josefin font-light text-center pb-3.5">O pedido</h2>
                            <span className="text-justify">Em 2024, percebemos que estávamos prontos para dar mais um passo... <a href="#">...</a></span>
                        </div>
                    </div>
                </section>

                <section id="gallery" className="w-full bg-white py-10 sm:py-20 flex flex-col items-center px-4">
                    <h2 className="font-amsterdan text-4xl sm:text-6xl mb-6 sm:mb-10">Nossa galeria</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
                        <div className="bg-gray-300 h-40 sm:h-48"></div>
                        <div className="bg-gray-300 h-40 sm:h-48"></div>
                        <div className="bg-gray-300 h-80 sm:h-96"></div>
                        <div className="bg-gray-300 h-40 sm:h-48 col-span-1 sm:col-span-2"></div>
                        <div className="bg-gray-300 h-40 sm:h-48"></div>
                    </div>
                </section>

                <section id="cerimone_place" className="w-full bg-old_paper py-10 sm:py-20 flex flex-col items-center justify-center px-4">
                    <h2 className="font-amsterdan text-4xl sm:text-6xl mb-6 sm:mb-10">Local da cerimônia</h2>
                    <a href="#" className="underline underline-offset-4 font-josefin font-semibold text-lg sm:text-2xl">Paróquia São José</a>
                    <a href="#" className="underline underline-offset-4 font-josefin font-light italic text-base sm:text-xl text-center">Rua Marechal Castelo Branco, 90 - Centro, São José das Palmeiras - PR</a>
                    <Embed_maps />
                </section>

                <section className="w-full bg-white py-10 sm:py-20 flex flex-wrap items-center justify-center gap-6 px-4">
                    <Card text="Início da cerimônia" title="Hora do evento" icon="clock.png"/>
                    <Card text="Salão de festas ao lado" title="Local da recepção" icon="party.png"/>
                    <Card text="Inspire-se aqui" title="Sugestão de vestimenta" icon="wear.png"/>
                </section>
            </main>
            <Footer />
        </>
    )
}
