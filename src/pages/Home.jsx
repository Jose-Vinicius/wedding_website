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

                <section id="banner" className="text-center w-full bg-old_paper h-screen flex justify-center flex-col">
                    <p className="font-amsterdan text-7xl py-20">José e Vitoria</p>
                    <p className="font-josefin font-light text-4xl py-10">22 de Novembro de 2025</p>
                </section>

                <section id="counter" className="text-center w-full bg-white h-96 flex justify-center items-center gap-x-[50px]">
                    <Clock />
                </section>

                <section id="our_history" className="w-full bg-old_paper h-full flex flex-col justify-center items-center">
                    <h2 className="font-amsterdan text text-6xl py-20">Nossa historia</h2>
                    <div className="flex justify-center w-full pb-10 gap-x-[100px]">
                        <div className="bg-white px-10 pt-5 w-80 h-80 flex flex-col items-start shadow-xl">
                            <h2 className="text-2xl font-josefin font-light w-full text-center pb-3.5">Como nos conhecemos</h2>
                            <span className="text-justify">Nos conhecemos em 2018, no colégio agrícola. Foi um período cheio de aprendizados, tanto acadêmicos quanto pessoais, e, no meio disso, nossos caminhos se cruzaram <a href="">...</a></span>
                        </div>
                        <div className="bg-white px-10 pt-5 w-80 h-80 flex flex-col items-start shadow-xl">
                            <h2 className="text-2xl font-josefin font-light w-full text-center pb-3.5">Nossa trajetoria</h2>
                            <span className="text-justify">Em 2021, nossa relação deu um passo importante. Sentíamos que estávamos prontos para compartilhar não apenas momentos, mas uma vida juntos. Foi então que decidimos morar juntos, assumindo uma relação de casados, mesmo sem o papel oficial <a href="">...</a></span>
                        </div>
                        <div className="bg-white px-10 pt-5 w-80 h-80 flex flex-col items-start shadow-xl">
                            <h2 className="text-2xl font-josefin font-light w-full text-center pb-3.5">O pedido</h2>
                            <span className="text-justify">Em 2024, percebemos que estávamos prontos para dar mais um passo. Já compartilhávamos uma vida a dois, mas sentíamos que o casamento seria a celebração do que construímos e do que ainda vamos construir <a href="">...</a></span>
                        </div>
                    </div>
                </section>

                <section id="gallery" className="w-full bg-white py-20 flex flex-col items-center">
                    <h2 className="font-amsterdan text-6xl mb-10">Nossa galeria</h2>
                    <div className="grid grid-cols-3 gap-4 w-11/12 max-w-screen-lg">
                        <div className="col-span-1 bg-gray-300 h-48"></div>
                        <div className="col-span-1 bg-gray-300 h-48"></div>
                        <div className="col-span-1 bg-gray-300 h-96"></div>
                        <div className="col-span-2 bg-gray-300 h-48"></div>
                        <div className="col-span-1 bg-gray-300 h-48"></div>
                    </div>
                </section>

                <section id="cerimone_place" className="w-full bg-old_paper py-20 flex items-center justify-center flex-col">
                    <h2 className="font-amsterdan text-6xl mb-10">Local da cerimonia</h2>
                    <a href="" className="underline underline-offset-4 pt-5 pb-3 font-josefin font-semibold text-3xl">Paroquia São josé</a>
                    <a href="" className="underline underline-offset-4 pb-5 font-josefin font-light font-italic text-2xl">Rua Marechal Castelo Branco, 90 Esquina com, R. Pres. Bernardes - Centro, São José das Palmeiras - PR</a>
                    <Embed_maps />
                </section>
                <div id="event_details" className="w-full bg-white py-20 flex items-center justify-center flex-col">
                    <h2 className="font-amsterdan text-6xl">Detalhes do evento</h2>
                </div>

                <section className="w-full bg-white py-20 flex items-center justify-center gap-x-20">
                    <Card text="Inicio da cerimonia" title="Hora do evento" icon="clock.png"/>
                    <Card text="Salão de festas ao lado" title="Local da recepção" icon="party.png"/>
                    <Card text="Inspire-se aqui" title="Sugestão de vestimenta" icon="wear.png"/>
                </section>
            </main>
            <Footer />
        </>
    )
}
