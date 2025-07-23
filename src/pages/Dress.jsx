import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

export default function Dress() {
    return (
        <>
            <PageTitle title="Sugestão de vestimentas" />
            <Header />
            <main className="w-full flex flex-col items-center pt-[120px] pb-[50px] px-4 bg-old_paper">
                <section className="max-w-4xl w-full text-center mb-12">
                    <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
                        Por ser um casamento vespertino, optamos por um dress code variado, misturando o esporte fino com o semiformal, ou seja, trajes diversos e coloridos, sem a obrigatoriedade dos homens usarem blazer e gravata, assim como as mulheres não precisam ir de longo e salto alto, se não desejarem.
                        <br /><br />
                        <strong>Nossa única exigência</strong> é para as mulheres deixarem as cores claras, sobretudo o branco e o lavanda, para a noiva e madrinhas!
                    </p>
                </section>

                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-6xl">
                    <div className="flex flex-col items-center">
                        <h2 className="font-josefin font-bold text-4xl pb-4">Para eles</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <ImageDress src={getDressImage("he_dress_1.jpeg")} alt="look masculino 1" />
                            <ImageDress src={getDressImage("he_dress_2.jpeg")} alt="look masculino 2" />
                            <ImageDress src={getDressImage("he_dress_3.jpeg")} alt="look masculino 2" />
                        </div>
                    </div>

                    <div className="w-[2px] h-20 lg:h-auto bg-black rounded-full hidden lg:block" />

                    <div className="flex flex-col items-center">
                        <h2 className="font-josefin font-bold text-4xl pb-4">Para elas</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <ImageDress src={getDressImage("she_dress_1.jpeg")} alt="look feminino 1" />
                            <ImageDress src={getDressImage("she_dress_2.jpeg")} alt="look feminino 2" />
                            <ImageDress src={getDressImage("she_dress_3.jpeg")} alt="look feminino 2" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )};

function ImageDress({ src, alt }) {
    return (
        <img
            className="w-full max-w-sm h-auto object-contain mb-6 shadow-md rounded-md"
            src={src}
            alt={alt}
        />
    );
}

function getDressImage(dress) {
    const urlImage = "https://ik.imagekit.io/spwzgep58/dress/";
    return `${urlImage}${dress}`;
}