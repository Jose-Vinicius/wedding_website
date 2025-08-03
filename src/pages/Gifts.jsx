import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import GiftCard from "../components/GiftCard";
import { getGifts } from "../services/baserowService";
import ButtonRounded from "../components/ButtonRounded";

const IMAGE_KIT_USER = import.meta.env.VITE_IMAGEKIT_USER_URL
const SERVER_BACKEND = import.meta.env.VITE_SERVER_BACKEND
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || "3001";
const SERVER_BACKEND_PROD = import.meta.env.VITE_SERVER_BACKEND_PROD

const isENVProd = true

export default function Gifts(){
    const [gifts, setGifts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGift, setSelectedGift] = useState(null);


    const imageDimensions = "tr=w-500,h-500,cm-pad_resize,bg-FFFFFF"

    useEffect(() => {
        async function loadGifts() {
            try{
                const allGifts = await getGifts()
             
                const activeGifts = allGifts.filter(gift => gift.Active === true);
                setGifts(activeGifts);

        
            } catch(e){
                console.error("Erro ao carregar presentes", e);
            }
        }
        loadGifts();
},[])

const handleOpenModal = (gift) => {
    setSelectedGift(gift)
    console.log(selectedGift)
    setIsModalOpen(true) 
}
const handleCloseModal = () => {setIsModalOpen(false);}



const handlePayment = async (giftName, giftPrice, giftIdentificator) => {
 
    const backEndURL = isENVProd ? `${SERVER_BACKEND_PROD}/pagamento` : `${SERVER_BACKEND}:${PORT_BACKEND}/pagamento`;


    const response = await fetch(backEndURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: giftName,
          price: giftPrice,
          external_reference: giftIdentificator,  
        })
      });

    const data = await response.json();


    if (data.init_point) {
        window.location.href = data.init_point;
    } else {
        alert("Erro ao gerar link de pagamento");
    }

}
    return(
        <div className="min-h-screen flex flex-col">
            <PageTitle title="Sugestão de presentes" />
            <Header modalOpen={false}/>
            <main className="w-full flex flex-col text-center justify-center flex-grow pt-[150px] bg-old_paper">
                <div>
                    <h1 className="font-josefin font-regular text-4xl md:text-7xl">Sugestão de presentes</h1>
                    <p className="font-josefin font-regular text-1xl md:text-2xl pt-5 px-10">A lista abaixo somente é uma sugestão dos presentes, fica a seu critério dar o que seu coração desejar</p>
                    <p className="font-josefin font-italic text-1xl md:text-xl pt-1 px-2">Caso deseje dar o presente físico envie mensagem para a noiva</p>
                </div>
                <section className="w-full flex flex-row justify-center flex-wrap gap-10 my-20">
                {gifts.length > 0 ? (
                        gifts.map((gift) => (
                        <GiftCard
                            key={gift.id}
                            gift={gift}
                            giftModalOpen={() => handleOpenModal(gift)}
                        />
                        ))
                    ) : (
                        <p>Carregando presentes...</p>
                    )}
                </section>
            </main>

            {isModalOpen && selectedGift && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2"
                    onClick={handleCloseModal}
                >
                    <div
                    className="bg-white rounded-lg shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                    >
          
                    <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-gray-100">
                        <img
                        src={`${IMAGE_KIT_USER}/${selectedGift.gift_image}?${imageDimensions}`}
                        alt={selectedGift.gift_name}
                        className="max-w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-12 text-center space-y-4">
                        <h2 className="text-xl md:text-2xl font-josefin text-gray-600 tracking-[0.1em]">
                        {selectedGift.gift_name}
                        </h2>

                        <p className="text-xl md:text-2xl font-josefin text-gray-500">
                        Seu presente: R$ {selectedGift.gift_price}
                        </p>

                        <ButtonRounded
                        text={"Faça o pagamento"}
                        onClick={() =>
                            handlePayment(
                            selectedGift.gift_name,
                            selectedGift.gift_price,
                            selectedGift.gift_identificator
                            )
                        }
                        />

         
                        <div className="flex flex-wrap items-center justify-center space-x-4 mt-4">
                        <img
                            src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
                            alt="Visa"
                            className="h-4"
                        />
                        <img
                            src="https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
                            alt="Mastercard"
                            className="h-6"
                        />
                        <span className="text-gray-400 text-2xl font-thin hidden sm:block">|</span>
                        <img
                            src="https://logopng.com.br/logos/pix-106.svg"
                            alt="Pix"
                            className="h-5"
                        />
                        </div>

                        <p className="text-xs text-gray-400">Parcelamento disponível</p>
                    </div>

         
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-gray-600"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                )}

            <Footer/>
        </div>
    );
}
