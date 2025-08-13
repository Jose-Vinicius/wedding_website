import React, {useState} from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

import { getGuest, confirmPresence } from "../services/baserowService";

import { loadMessage, randomMessage } from "../services/confirmationMessage";

export default function ConfirmPresence(){
    const [phone, setPhone] = useState("")
    const [guest, setGuest] = useState(null)
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState("")
    const [confirmationMessage, setConfirmationMessage] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmations, setConfirmations] = useState(false);


   

    async function handleSearch() {
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
                companions: [
                    result[0].companion_1,
                    result[0].companion_2,
                    result[0].companion_3,
                    result[0].companion_4,
                    result[0].companion_5,
                ]. filter(item => item)
            }

            setGuest(transformedGuest);
            setPhone("");
            setMessage("");
            setIsModalOpen(true);

            const initialConfirmations = {
                confirmation_guest: result[0].confirmation_guest || false,
                confirm_companion_1: result[0].confirm_companion_1 || false,
                confirm_companion_2: result[0].confirm_companion_2 || false,
                confirm_companion_3: result[0].confirm_companion_3 || false,
                confirm_companion_4: result[0].confirm_companion_4 || false,
                confirm_companion_5: result[0].confirm_companion_5 || false
            }

            setConfirmations(initialConfirmations)

        }

        if(!result){
            setMessage("Numero não encontrado, entre em contato com a noiva")
        }

    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleCheckBoxChange(field) {
        setConfirmations(prev => {
            const newState = { ...prev, [field]: !prev[field] };
            return newState;
        });
    }

    async function handleConfirmPresence(){
        const getListMessage = await loadMessage()

        if(guest){
            const response = await confirmPresence(guest.id, confirmations)
            if(response){
                closeModal()
            }

            Object.values(confirmations).includes(true) ? setConfirmationMessage(randomMessage(getListMessage)) : ""
        }
    }

    return(
        <>
            <PageTitle title="Confirmação de presença" />
            <Header modalOpen={isModalOpen}/>
            <main className="w-full flex flex-col pt-[150px] md:pt-[200px] pb-[200px] md:pb-[300px] bg-old_paper justify-center text-center">
                <h1 className="font-amsterdan font-regular text-4xl md:text-6xl pb-20" >Confirme sua presença</h1>
                <div className="w-full flex flex-col justify-center items-center pt-20 md:pt-20">
                    <form 
                        onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                    className="w-full flex flex-col justify-center items-center pt-20 md:pt-20">
                        
                    <input 
                        type="text" 
                        name="confirmPresence" 
                        id="confirmPresence" 
                        className="w-6xl text-2xl md:text-5xl font-semibold font-josefin text-center caret-transparent bg-transparent border-none outline-none focus:ring-0 placeholder-gray-500 w-full" 
                        placeholder="Insira seu telefone Ex.: 45998121611..."
                        value={phone}
                        onChange={(e) => {
                            const inputPhone = e.target.value
                            if(!/^\d*$/.test(inputPhone)){
                                setAlert("Apenas números são permitidos!")
                                return
                            }

                            setPhone(inputPhone)
                            setMessage("")
                            setAlert("")
                            setConfirmationMessage("")
                          
                        }}    
                    /> 
                  
                        {message != "" ? <p className="mt-2 text-red text-1xl px-2 md:text-4xl">{message}</p> : ""}

                        {alert != "" ? <p className="mt-2 text-red text-1xl px-2 md:text-4xl">{alert}</p> : ""}

                        {confirmationMessage != "" ? <p className="mt-4 text-black px-2 text-2xl md:text-4xl font-josefin">{confirmationMessage}</p> : ""}

                        <button 
                            className=" text-black border-[4px] rounded-2xl border-purple hover:border-d-purple hover:bg-purple hover:text-white p-2 w-64 rounded-3xl text-3xl duration-300 ease-in-out font-josefin font-semibold mt-20"
                            onClick={handleSearch}
                        >
                                Buscar 
                        </button>
                    </form>
                </div>
            </main>
                        
            {isModalOpen && guest && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg min-w-[400px] md:min-h-[400px] min-h-[300px] text-center">
                        <h2 className="text-2xl md:text-4xl font-amsterdan font-regular m-5 md:m-10">Confirmação de Presença</h2>
                        <div className="p-2">
                            <div className="text-1xl md:text-2xl font-semibold px-10 flex flex-col justify-center">Convidado Principal: {guest.guest}
                                <label className="text-1xl font-regular font-amstedan pt-5 pb-2">
                                    <input
                                        type="checkbox"
                                        checked={confirmations.confirmation_guest}
                                        onChange={() => handleCheckBoxChange("confirmation_guest")}
                                        className="mx-5 h-3 scale-[2]"
                                    />
                                    Confirmar presença
                                </label>
                                <hr className="w-60 mx-auto my-2"/>
                            </div>
                        </div>

                        <h3 className="text-1xl md:text-2xl font-semibold mb-2">Acompanhantes:</h3>
                        <div className="flex flex-col justify-center">
                            {guest.companions.map((acompanhante, index) => (
                                <div className="flex flex-col text-center justify-center">
                                    <label key={index} className="block pb-2 text-1xl md:text-2xl">
                                        <input
                                            type="checkbox"
                                            checked={confirmations[`confirm_companion_${index + 1}`]}
                                            onChange={() => handleCheckBoxChange(`confirm_companion_${index + 1}`)}
                                            className="mx-5 h-3 scale-[2]"
                                        />
                                        {acompanhante}
                                    </label>
                                    {index !== guest.companions.length -1 ? <hr className="w-60 mx-auto my-2"/> : ""}
                                </div>
                            ))}
                        </div>
                        

                        <button onClick={handleConfirmPresence} className="bg-green text-white hover:text-black px-2 md:px-6 py-2 md:py-2 rounded-md text-xl mt-6 transition duration-200 ease-in-out">
                            Confirmar Presença
                        </button>
                        <button onClick={closeModal} className="ml-4 text-white bg-red hover:text-black px-2 md:px-6 py-2 md:py-2 rounded-md text-xl transition duration-200 ease-in-out">
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            <Footer/>
        </>
    )
}
