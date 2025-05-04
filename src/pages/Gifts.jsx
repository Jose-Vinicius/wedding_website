import React from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

import Button from "../components/Button";

export default function Gifts(){
    return(
        <>
            <PageTitle title="Sugestão de presentes" />
            <Header modalOpen={false}/>
            <main className="w-full flex flex-col text-center justify-center flex-grow pt-[150px] bg-old_paper">
                <div>
                    <h1 className="font-josefin font-regular text-4xl md:text-7xl">Sugestão de presentes</h1>
                    <p className="font-josefin font-regular text-1xl md:text-2xl pt-5 px-10">A lista abaixo somente é uma sugestão dos presentes, fica a seu critério dar o que seu coração desejar</p>
                </div>
                <section className="w-full flex flex-row justify-center flex-wrap gap-10 my-20">
                     <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                    <GiftCard src={"https://m.media-amazon.com/images/I/61PsCXKcCGL._AC_SL1000_.jpg"} alt={"Alexa"} title={"Alexa"} price={"2099,00"} giftLink={"https://a.co/d/7gaYB4I"} moneyLink={"https://www.mercadopago.com.br/"}/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

function GiftCard({src, alt, title, price, giftLink, moneyLink}){
    return(
      
        <div className="w-full max-w-[300px] min-h-[400px] bg-transparent border-[5px] rounded-2xl border-purple text-center flex flex-col items-center p-4 gap-3 drop-shadow-lg sm:w-[250px] sm:min-h-[350px] md:w-[300px] md:min-h-[400px] lg:w-[320px] lg:min-h-[420px] relative z-10">
            <img src={src} alt={alt} className="w-[70%] h-auto object-contain pt-2 drop-shadow-xl"/>
            <h2 className="font-josefin font-regular text-2xl">{title}</h2>
            <p className="font-josefin font-bold text-2xl">R$ {price}</p>
            <div className="flex flex-col items-center gap-1">
                <Button text={"Enviar presente"} link={giftLink}/>
                <span className="font-josefin font-light text-sm">ou</span>
                <Button text={"Contribuir em dinheiro"} link={moneyLink}/>
            </div>
    </div>
    )
}