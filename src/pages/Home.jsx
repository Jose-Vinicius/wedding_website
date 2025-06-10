import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/Footer";
import Embed_maps from "../components/Embed_maps";
import Card from "../components/Card";
import Clock from "../components/Clock";
import PageTitle from "../components/PageTitle";

export function Home() {
    return (
        <>
            <PageTitle title="Home" />
            <Header />
            <main className="flex-grow pt-[100px]">

                <section id="banner" className="text-center w-full bg-old_paper min-h-screen flex flex-col justify-center items-center px-4">
                    <p className="font-amsterdan text-4xl sm:text-6xl md:text-7xl py-6 sm:py-10">José e Vitória</p>
                    <p className="font-josefin font-light text-xl sm:text-3xl md:text-4xl py-4 sm:py-6">22 de Novembro de 2025</p>
                </section>

                <section id="counter" className="text-center w-full bg-white min-h-[250px] md:min-h-[350px]  flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-10 px-4">
                    <Clock />
                </section>

                <section id="cerimone_place" className="w-full bg-old_paper py-10 sm:py-20 flex flex-col items-center justify-center px-4">
                    <h2 className="font-amsterdan text-4xl sm:text-6xl mb-6 sm:mb-10">Local da cerimônia</h2>
                    <a href="#" className="underline underline-offset-4 font-josefin font-semibold text-lg sm:text-2xl">Paróquia São José</a>
                    <a href="#" className="underline underline-offset-4 font-josefin font-light italic text-base sm:text-xl text-center">Rua Marechal Castelo Branco, 90 - Centro, São José das Palmeiras - PR</a>
                    <Embed_maps />
                </section>

                <section className="w-full bg-white py-10 sm:py-20 flex flex-wrap items-center justify-center gap-6 px-4">
                    <Card text="Início da cerimônia" subText="17:30" title="Hora do evento" icon="clock.png"/>
                    <Card text="Salão de festas ao lado" title="Local da recepção" icon="party.png"/>
                    <Link to="/dress">
                        <Card text="Inspire-se aqui" title="Sugestão de vestimenta" icon="wear.png"/>
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    )
}
