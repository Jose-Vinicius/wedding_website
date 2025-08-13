import React, { useEffect, useState } from "react";
import { getConfirmedGuests } from "../services/baserowService";

export default function ConfirmedPresence() {
    const [confirmed, setConfirmed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalGuests, setTotalGuests] = useState(0);

    useEffect(() => {
        async function loadData() {
            const data = await getConfirmedGuests();
            setConfirmed(data || []);
            setLoading(false);
            setTotalGuests(data.reduce((acc, guest) => acc + 1 + guest.confirmedCompanions.length, 0));
        }
        loadData();
    }, []);

    if (loading) return <p className="text-center mt-10">Carregando...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Presenças Confirmadas</h2>
            {confirmed.length === 0 ? (
                <p className="text-center">Nenhuma presença confirmada até agora.</p>
            ) : (
                <ul className="divide-y divide-gray-300">
                    <li className="font-semibold text-lg mb-2">Total de convidados até o momento confirmados: {totalGuests}</li>

                    {confirmed.map((guest, index) => (
                        <li key={index} className="py-3">
                            <p className="font-semibold">{guest.guest}</p>
                            {guest.confirmedCompanions.length > 0 && (
                                <ul className="pl-5 text-gray-700 text-sm list-disc">
                                    {guest.confirmedCompanions.map((comp, idx) => (
                                        <li key={idx}>{comp}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
