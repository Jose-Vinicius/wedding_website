import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { getGallery } from "../services/baserowService";

export default function Gallery(){
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
            async function loadGallery() {
                try{
                    const allGallery = await getGallery()
                 
                    const activeGallery = allGallery.filter(image => image.image_active === true);
                    setGallery(activeGallery);
    
            
                } catch(e){
                    console.error("Erro ao carregar presentes", e);
                }
            }
            loadGallery();
    },[])


    return(
        <>
            <PageTitle title="Galeria" />
            <Header />
            <main className="w-full flex flex-col pt-[200px] pb-[50px] bg-old_paper justify-center text-center">
                <h1 className="font-amsterdan font-regular text-5xl md:text-7xl">Nossa galeria</h1>
                <div className="lg:mx-20 lg:mt-20 mx-5 mt-20 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-3 gap-4 space-y-4">

                    {gallery.length > 0 ?  gallery.map((image, index) => {
                        return (
                            <ImageGallery key={index} src={getGalleryImage(image.image_name)} alt={`image-${index + 1}`} />
                        )
                    }): (<p>carregando imagens</p>)},

                </div>
            </main>
            <Footer />
        </>
    )
}

function ImageGallery({src, alt}){
    return(
        <>
             <img className="w-full rounded-xl object-cover" src={src} alt={alt} loading="lazy" />
        </>
    )
}

function getGalleryImage(image) {
    const urlImage = "https://ik.imagekit.io/spwzgep58/gallery/";
    return `${urlImage}${image}`;
}