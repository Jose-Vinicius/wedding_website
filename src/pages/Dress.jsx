import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

export default function Dress() {
    return (
        <>
            <PageTitle title="Sugestão de vestimentas" />
            <Header />
            <main className="w-full flex flex-col md:flex-row pt-[120px] md:pt-[200px] pb-[50px] bg-old_paper justify-around items-center text-center px-4">
                {/* Coluna Masculina */}
                <div className="flex flex-col items-center">
                    <h2 className="font-josefin font-bold text-3xl md:text-5xl pb-5">Para eles</h2>
                    <ImageDress src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="look masculino 1" />
                    <ImageDress src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="look masculino 2" />
                </div>

                {/* Divisor */}
                <div className="hidden md:block w-[3px] h-auto bg-black rounded-full mx-4"></div>
                <div className="md:hidden w-[80%] h-[2px] bg-black rounded-full my-8"></div>

                {/* Coluna Feminina */}
                <div className="flex flex-col items-center">
                    <h2 className="font-josefin font-bold text-3xl md:text-5xl pb-5">Para elas</h2>
                    <ImageDress src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="look feminino 1" />
                    <ImageDress src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="look feminino 2" />
                </div>
            </main>
            <Footer />
        </>
    );
}

function ImageDress({ src, alt }) {
    return (
        <img
            className="w-full max-w-sm h-auto object-contain mb-6 shadow-md rounded-md"
            src={src}
            alt={alt}
        />
    );
}