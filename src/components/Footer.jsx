import React from "react";

export default function Footer() {
    return (
        <footer className="bg-purple text-center p-5">
            <div>
                <p className="font-josefin text-2xl">
                    "Tudo começou com um <span className="font-bold">'oi'</span>, e agora dizemos <span className="font-bold">'Sim'</span>."
                </p>
            </div>
            <div className="p-10">
                <p className="font-amsterdan text-2xl">José e Vitoria</p>
            </div>
            <div>
                <p className="font-josefin font-light text-xs">Desenvolvido por José Vinicius</p>
            </div>
        </footer>
    )
}