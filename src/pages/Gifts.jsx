import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import GiftCard from "../components/GiftCard";
import { getGifts, getGuest, saveReserverdGift } from "../services/baserowService";
import ButtonRounded from "../components/ButtonRounded";
import ListItem from "../components/ListItem";
import ButtonClipboard from "../components/ButtonClipboard";

import copyToClipBoard from "../utils/copyToClipboard";
import PixQRCode from "../components/QRCode";
import CopyAndPastePix from "../utils/generatePixCopyAndPaste";

const IMAGE_KIT_USER = import.meta.env.VITE_IMAGEKIT_USER_URL
const SERVER_BACKEND = import.meta.env.VITE_SERVER_BACKEND
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || "3001";
const SERVER_BACKEND_PROD = import.meta.env.VITE_SERVER_BACKEND_PROD

const isENVProd = true

export default function Gifts(){
    const [gifts, setGifts] = useState([]);
    const [isBuyModalOpen, setisBuyModalOpen] = useState(false);
    const [isReserveModalOpen, setisReserveModalOpen] = useState(false);
    const [isReservedModalOpen, setisReservedModalOpen] = useState(false);
    const [selectedGift, setSelectedGift] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState("")
    const [guest, setGuest] = useState(null)
    const [alert, setAlert] = useState("")
    const [copyText, setCopyText] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const [pixQRKey, setPixQRKey] = useState(null)

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

function timerToResetClipboard(result){
    setIsCopied(true)
    setCopyText(result.message)
    setTimeout(() => {
        setCopyText("")
        setIsCopied(false)
    }, 3000);
}

const handleOpenModal = (gift, modalType) => {
    setSelectedGift(gift)
    if(modalType === "buy"){
        setisBuyModalOpen(true)
        return
    }
    if(modalType === "reserve"){
        setisReserveModalOpen(true)
        return
    }
    if(modalType === "reserved"){
        setisReservedModalOpen(true)
        return
    }
}
const handleCloseModal = () => {
    setisBuyModalOpen(false);
    setisReserveModalOpen(false);
    setisReservedModalOpen(false);
    setSelectedGift(null);
}

const handleSearchGuest = async (e) =>{
    e.preventDefault()

    if(!phone || phone.trim().length < 11){
       setAlert("Por favor, insira um número de telefone válido com no mínimo 9 dígitos.")
       return
   }

   const result = await getGuest(phone)

   if(result){
         const transformedGuest = {
                id: result[0].id,
                guest: result[0].guest,
                phone: result[0].phone_number,
         }

        setGuest(transformedGuest);
        
        saveReserverdGift(transformedGuest, selectedGift.id)

        setPhone("");
        setAlert("");
       
        setPixQRKey(CopyAndPastePix("09057065959", "Vitoria", "Cascavel", selectedGift.gift_price))
        
        setisReserveModalOpen(false);
        handleOpenModal(null, "reserved")
        return
   }

    if(!result){
        setAlert("Número não encontrado, entre em contato com a noiva")
        return
    }
}

const handlePayment = async (giftName, giftPrice, giftIdentificator) => {

    setIsLoading(true);
 
    const backEndURL = isENVProd ? `${SERVER_BACKEND_PROD}/pagamento` : `${SERVER_BACKEND}:${PORT_BACKEND}/pagamento`;


    const response = await fetch(backEndURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: giftName,
          price: giftPrice,
          external_reference: giftIdentificator,  
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.init_point) {
            window.location.href = data.init_point;
        } else {
            alert("Erro ao gerar link de pagamento");
            setIsLoading(false);
        }
      })
      .catch(e => {
        console.error("Erro ao processar pagamento", e);
        alert("Erro ao processar pagamento");
        setIsLoading(false);
      })
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
                            giftModalOpen={(modalType) => handleOpenModal(gift, modalType)}
                        />
                        ))
                    ) : (
                        <p>Carregando presentes...</p>
                    )}
                </section>
            </main>

            {isBuyModalOpen && selectedGift && (
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
                            text={isLoading ? "Carregando..." : "Faça o pagamento"}
                            onClick={() =>
                                !isLoading &&
                                handlePayment(
                                    selectedGift.gift_name,
                                    selectedGift.gift_price,
                                    selectedGift.gift_identificator
                                )
                            }

                                disabled={isLoading}
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

            {isReserveModalOpen && selectedGift && (
                <div
                    className="fixed inset-0 flex flex-col flex-wrap items-center justify-center bg-black bg-opacity-50 z-50 px-2"
                    onClick={handleCloseModal}
                >
                    <div
                    className="bg-white rounded-lg shadow-2xl flex flex-col md:flex-col text-center items-center w-full max-w-4xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                    >
          
                    <div className="w-full flex items-center justify-center p-4 md:p-8 bg-gray-100">
                        <img
                        src={`${IMAGE_KIT_USER}/${selectedGift.gift_image}?${imageDimensions}`}
                        alt={selectedGift.gift_name}
                        className="max-w-full h-auto max-h-[200px] md:max-h-[200px] object-contain"
                        />
                    </div>
                 
                    <div className="w-full flex flex-col items-center justify-center p-4 md:p-12 text-center space-y-4">
                        <h2 className="text-xl md:text-2xl font-josefin text-gray-600 tracking-[0.1em]">
                        {selectedGift.gift_name}
                        </h2>

                        <p className="text-xl md:text-2xl font-josefin text-gray-500">
                        Seu presente: R$ {selectedGift.gift_price}
                        </p>
                        <form className="w-full" onSubmit={handleSearchGuest}>
                            <input 
                                type="text"
                                className="w-full text-xl md:text-2xl font-semibold font-josefin text-center caret-transparent bg-transparent border-none outline-none focus:ring-0 placeholder-gray-500 p-6" 
                                placeholder="Insira seu telefone Ex.: 45998121611..." 
                                value={phone}
                                onChange={(e) => {
                                    const inputPhone = e.target.value
                                    if(!/^\d*$/.test(inputPhone)){
                                        setAlert("Apenas números são permitidos!")
                                        return
                                    }
                                    setPhone(inputPhone)
                                    setAlert("")
                                }}
                                    
                            />

                            <ButtonRounded
                            text={isLoading ? "Carregando..." : "Reservar presente"}
                        />
                        </form>
                        {alert && <p>{alert}</p>}
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

            {isReservedModalOpen && (
                <div
                    className="fixed inset-0 flex flex-wrap flex-col items-center justify-center bg-black bg-opacity-50 z-50 px-2"
                    onClick={handleCloseModal}
                >

                    <div
                    className="bg-white rounded-lg shadow-2xl flex flex-col flex-wrap justify-center md:flex-col items-center w-full max-w-4xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                    >
                        <h1 className="text-xl md:text-4xl font-josefin font-regular text-black-600 font-bold m-5">Instruções da reserva de presentes</h1>
                        <div className="w-full flex flex-col flex-wrap text-left justify-center bg-gray-100">
                            <ListItem text={"1° Caso deseje enviar o presente fisicamente para a casa dos noivos este é o endereço: Rua Maria Tereza Figueiredo n° 118, Interlagos, Cascavel - PR"} />
                            <ListItem text={"2° Caso deseje comprar o prsesente fisicamente e entregar no dia da cerimonia fique a vontade"} />
                            <ListItem text={`3° Caso queira enviar o valor via pix esta aqui é a chave pix: ${pixQRKey}`} />
                        </div>
    
                        <div className="hidden md:inline">
                            <PixQRCode payload={pixQRKey} />
                        </div>

                        <ButtonClipboard text={isCopied ? copyText : "Clique aqui para copiar a chave"} pixKey={pixQRKey} copyText={ async(pixKey) => {
                            const result = await copyToClipBoard(pixKey)
                            timerToResetClipboard(result)
                        }}/>
                        

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
