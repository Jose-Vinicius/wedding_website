import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function OurHistory(){
    return(
        <>
            <Header />
                <main s>
                    <h1 className="font-amsterdan font-semi-bold text-7xl pb-8">Nossa historia</h1>
                    <div className="w-full flex justify-around py-5">
                        <div className="max-w-xl flex justify-center flex-col text-left">
                            <h2 className="font-josefin font-bold text-4xl py-4">Como nos conhecemos</h2>
                            <p className="font-josefin text-2xl" >Nos conhecemos em 2018, no colégio agrícola. Foi um período cheio de aprendizados, tanto acadêmicos quanto pessoais, e, no meio disso, nossos caminhos se cruzaram. Entre aulas, trabalhos em grupo e conversas que iam até tarde, nasceu uma conexão especial que, mesmo sem sabermos, seria o início de algo muito maior.</p>
                        </div>
                        <div className="w-[500px] h-[500px] flex justify-center items-center">
                            <img src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="" />
                        </div>
                    </div>
                    <div className="w-full flex justify-around py-5 text-left">
                        <div className="w-[500px] h-[500px] flex justify-center items-center">
                            <img src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="" />
                        </div>
                        <div className="max-w-xl flex justify-center flex-col">
                            <h2 className="font-josefin font-bold text-4xl py-4">Nossa historia juntos</h2>
                            <p className="font-josefin text-2xl" >Em 2021, nossa relação deu um passo importante. Sentíamos que estávamos prontos para compartilhar não apenas momentos, mas uma vida juntos. Foi então que decidimos morar juntos, assumindo uma relação de casados, mesmo sem o papel oficial. Essa decisão nos ensinou muito sobre companheirismo, paciência e amor verdadeiro. Foi um período em que crescemos, tanto individualmente quanto como casal, criando as bases para o que está por vir.</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-around py-5">
                        <div className="max-w-xl flex justify-center flex-col text-left">
                            <h2 className="font-josefin font-bold text-4xl py-4">Como decidimos nos casar ?</h2>
                            <p className="font-josefin text-2xl" >Em 2024, percebemos que estávamos prontos para dar mais um passo. Já compartilhávamos uma vida a dois, mas sentíamos que o casamento seria a celebração do que construímos e do que ainda vamos construir. Foi um momento natural e cheio de amor, onde decidimos oficializar aquilo que já era claro: queremos passar o resto de nossas vidas lado a lado.</p>
                        </div>
                        <div className="w-[500px] h-[500px] flex justify-center items-center">
                            <img src="https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h" alt="" />
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    )
}