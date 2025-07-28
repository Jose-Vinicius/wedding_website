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

                    {gallery.length === 0 ? (
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-3 gap-4 space-y-4">
                            {[...Array(9)].map((_, i) => (
                            <div key={i} />
                            ))}
                        </div>
                        ) : (
                        <div className="gap-4 space-y-4">
                            {gallery.map((image, index) => (
                            <ImageGallery key={index} src={getGalleryImage(image.image_name)} alt={`image-${index + 1}`} />
                            ))}
                        </div>
                    )},
                </div>
            </main>
            <Footer />
        </>
    )
}

function ImageGallery({src, alt}){
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-200 min-h-[200px]">
        <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
            }`}
        />
        {!loaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-xl" />
        )}
        </div>
    );
}

function getGalleryImage(image) {
    const urlImage = "https://ik.imagekit.io/spwzgep58/gallery/";
    return `${urlImage}${image}?tr=w-800,q-70,fo-auto,format=webp`;
}