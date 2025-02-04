import React, {useState, useEffect} from "react";

export default function Clock(){
    const weedingDate = new Date(2025, 10, 22, 17, 30, 0, 0);
    
    const calcTimeLeft = () => {
        const dateNow = new Date();

        const diff = dateNow.getTime() - weedingDate.getTime();
        const isPast = diff >= 0;

        const absDiff = Math.abs(diff)

        return {
            isPast,
            days: Math.floor(absDiff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((absDiff % (1000 * 60)) / 1000),
        }
    }

    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calcTimeLeft());
        },1000)

        return () => clearInterval(timer);
    }, [])

    const dateTreatment = (date) => {return date < 10 ? "0"+ date : date}

    return(
        <>
            <div>
                <span className="font-thin md:text-3xl text-2xl">{timeLeft.isPast ? "Já se passarão" : "Faltam"}</span>
            </div>
            <div className="flex gap-4 md:gap-10">
                <div className="flex flex-col items-center">
                    <span className="font-adamina md:text-5xl text-2xl">{dateTreatment(timeLeft.days)}</span>
                    <span className="font-thin md:text-3xl sm:text-1xl">Dias</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-adamina md:text-5xl text-2xl">{dateTreatment(timeLeft.hours)}</span>
                    <span className="font-thin md:text-3xl sm:text-1xl">Horas</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-adamina md:text-5xl text-2xl">{dateTreatment(timeLeft.minutes)}</span>
                    <span className="font-thin md:text-3xl sm:text-1xl">Minutos</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-adamina md:text-5xl text-2xl">{dateTreatment(timeLeft.seconds)}</span>
                    <span className="font-thin md:text-3xl sm:text-1xl">Segundos</span>
                </div>
            </div>
            
        </>
    )
}



