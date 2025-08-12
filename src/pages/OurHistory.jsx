import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

export default function OurHistory(){

    function getImage(image){
        const urlImage = "https://ik.imagekit.io/spwzgep58/image/"
    
        return `${urlImage}${image}`;
    }

    return(
        <>
            <PageTitle title="Nossa historia" />
            <Header />
                <main className="w-full flex flex-col text-center justify-center flex-grow pt-[150px] md:pt-[200px] bg-old_paper">
                    <h1 className="font-amsterdan font-semi-bold text-5xl md:text-7xl pb-8">Nossa historia</h1>
                    
                    <div className="w-full flex flex-col md:flex-row justify-around py-5 px-8">
                        <div className="max-w-xl flex justify-center flex-col text-left">
                            <h2 className="font-josefin font-bold text-3xl md:text-4xl py-4 text-center">Como nos conhecemos</h2>
                            <p className="font-josefin text-2xl md:text-2xl text-justify pb-10" >Nos conhecemos em 2018, no colégio agrícola. Foi um período cheio de aprendizados, tanto acadêmicos quanto pessoais, e, no meio disso, nossos caminhos se cruzaram. Entre aulas, trabalhos em grupo e conversas que iam até tarde, nasceu uma conexão especial que, mesmo sem sabermos, seria o início de algo muito maior.</p>
                        </div>
                        <div className="md:w-[500px] w-50 md:h-[500px] h-[250px] flex justify-center items-center">
                            <img src={getImage("como_nos_conhecemos.jpeg")} alt="" className="w-full h-full object-cover rounded-xl"/>
                        </div>
                    </div>

                    <div className="w-full flex flex-col-reverse md:flex-row justify-around py-5 px-8">
                        <div className="md:w-[500px] w-50 md:h-[500px] h-[250px] flex justify-center items-center ">
                            <img src={getImage("nossa_historia.jpeg")} alt="" className="w-full h-full object-cover rounded-xl"/>
                        </div>
                        <div className="max-w-xl flex justify-center flex-col">
                            <h2 className="font-josefin font-bold text-4xl py-4 text-center">Nossa historia juntos</h2>
                            <p className="font-josefin text-2xl text-justify pb-10" >Em 2021, nossa relação deu um passo importante. Sentíamos que estávamos prontos para compartilhar não apenas momentos, mas uma vida juntos. Foi então que decidimos morar juntos, assumindo uma relação de casados, mesmo sem o papel oficial. Essa decisão nos ensinou muito sobre companheirismo, paciência e amor verdadeiro. Foi um período em que crescemos, tanto individualmente quanto como casal, criando as bases para o que está por vir.</p>
                        </div>
                    </div>

                    {/* <div className="w-full flex flex-col md:flex-row justify-around py-5 px-8">
                        <div className="max-w-xl flex justify-center flex-col text-left">
                            <h2 className="font-josefin font-bold text-4xl py-4 text-center">Como decidimos nos casar ?</h2>
                            <p className="font-josefin text-2xl text-justify pb-10">Em 2024, percebemos que estávamos prontos para dar mais um passo. Já compartilhávamos uma vida a dois, mas sentíamos que o casamento seria a celebração do que construímos e do que ainda vamos construir. Foi um momento natural e cheio de amor, onde decidimos oficializar aquilo que já era claro: queremos passar o resto de nossas vidas lado a lado.</p>
                        </div>
                        <div className="md:w-[500px] w-50 md:h-[500px] h-[250px] flex justify-center items-center">
                            
                        </div>
                    </div> */}
                </main>
            <Footer />
        </>
    )
}

