import React, {useState} from "react";

import Header from "../components/header";
import Footer from "../components/Footer";

import { getGuest, confirmPresence } from "../services/baserowService";

export default function ConfirmPresence(){
    const [phone, setPhone] = useState("")
    const [guest, setGuest] = useState(null)
    const [message, setMessage] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmations, setConfirmations] = useState(false);

    async function handleSearch() {
        const result = await getGuest(phone)

        if(result){
            const transfomedGuest = {
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

            setGuest(transfomedGuest);
            setPhone("");
            setMessage("");
            setIsModalOpen(true);

            console.log(guest)

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
            console.log("Novo estado de confirmações:", newState); // Log para depuração
            return newState;
        });
    }

    async function handleConfirmPresence(){
        if(guest){
            const response = await confirmPresence(guest.id, confirmations)
            if(response){
                console.log("presença confirmada")
                closeModal()
            }

            if(!response){
                console.log("erro ao confirmar presença")
            }
        }
    }

    return(
        <> 
            <Header/>
            <main className="w-full flex flex-col pt-[200px] pb-[300px] bg-old_paper justify-center text-center">
                <h1 className="font-amsterdan font-regular text-6xl pb-20" >Confirme sua presença</h1>
                <div className="w-full flex flex-col justify-center items-center pt-20">
                    <input 
                        type="text" 
                        name="confirmPresence" 
                        id="confirmPresence" 
                        className="w-8xl text-5xl font-semibold font-josefin text-center caret-transparent bg-transparent border-none outline-none focus:ring-0 placeholder-gray-500 w-full" 
                        placeholder="Insira seu telefone Ex.: 45998121611..."
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value); 
                            setMessage("");
                        }}    
                    /> 

                    {message != "" ? <p className="mt-2 text-red-600">{message}</p> : ""}

                    <button 
                        className="bg-transparent text-black border-[4px] rounded-2xl border-purple hover:border-d-purple hover:bg-purple hover:text-white p-2 w-64 rounded-3xl text-3xl duration-300 ease-in-out font-josefin font-semibold mt-20"
                        onClick={handleSearch}
                    >
                            Buscar 
                    </button>

                </div>
            </main>
                        
            {isModalOpen && guest && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-lg text-center">
                        <h2 className="text-4xl font-bold mb-4">Confirmação de Presença</h2>
                        <div className="text-2xl font-semibold mb-4">Convidado Principal: {guest.guest}</div>
                        <div className="mt-4">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={confirmations.confirmation_guest}
                                    onChange={() => handleCheckBoxChange("confirmation_guest")}
                                />
                                Confirmar presença
                            </label>
                        </div>

                        <h3 className="text-2xl font-semibold mt-4">Acompanhantes:</h3>
                        {guest.companions.map((acompanhante, index) => (
                            <label key={index} className="block">
                                <input
                                    type="checkbox"
                                    checked={confirmations[`confirm_companion_${index + 1}`]}
                                    onChange={() => handleCheckBoxChange(`confirm_companion_${index + 1}`)}
                                />
                                {acompanhante}
                            </label>
                        ))}

                        <button onClick={handleConfirmPresence} className="bg-green-500 text-black px-6 py-2 rounded-md text-xl mt-6">
                            Confirmar Presença
                        </button>
                        <button onClick={closeModal} className="ml-4 bg-red-500 text-black px-6 py-2 rounded-md text-xl">
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            <Footer/>
        </>
    )
}
