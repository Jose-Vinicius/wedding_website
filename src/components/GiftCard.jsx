import React from "react";

const imagekitUrl = import.meta.env.VITE_IMAGEKIT_USER_URL;

import ButtonModal from "../components/ButtonModal";

export default function GiftCard({gift, giftModalOpen}){

    const imageDimensions = "tr=w-500,h-500,fo-pad";

    return(
      
        <div className="w-full max-w-[300px] min-h-[400px] bg-transparent border-[5px] rounded-2xl border-purple text-center flex flex-col items-center p-4 gap-3 drop-shadow-lg sm:w-[250px] sm:min-h-[350px] md:w-[300px] md:min-h-[400px] lg:w-[320px] lg:min-h-[420px] relative z-10">
            <img src={`${imagekitUrl}/${gift.gift_image}?${imageDimensions}`} alt={gift.gift_name} className="w-[70%] h-auto object-contain pt-2 drop-shadow-xl rounded-md"/>
            <h2 className="font-josefin font-regular text-xl">{gift.gift_name}</h2>
            <p className="font-josefin font-bold text-2xl">R$ {gift.gift_price}</p>
            <div className="flex flex-col items-center gap-1">
                <ButtonModal text={"Contribuir em dinheiro"} onClick={() => giftModalOpen() } isPaid={gift.gift_paid}/>
            </div>
    </div>
    )
}