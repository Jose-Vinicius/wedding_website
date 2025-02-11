import React from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

export default function Gallery(){
    return(
        <>
            <PageTitle title="Galeria" />
            <Header />
            <main className="w-full flex flex-col pt-[200px] pb-[50px] bg-old_paper justify-center text-center">
                <h1 className="font-amsterdan font-regular text-5xl md:text-7xl">Nossa galeria</h1>
                <div className="lg:mx-20 lg:mt-20 mx-5 mt-20 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-3 gap-4 space-y-4">
                    <ImageGallery src={"https://i.pinimg.com/736x/f2/2a/2f/f22a2f343b2d536ba7bac81e022d2c6a.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/f2/33/6a/f2336a12c0adccf7ea88b6be57c09d44.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/69/6e/40/696e40288349d2c68150b6427fb699c2.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/c7/69/62/c76962b08d65d9348327406bf84f11bb.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/72/b9/81/72b98101c0a506134adbc7decbdd7c26.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/69/6e/40/696e40288349d2c68150b6427fb699c2.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/72/b9/81/72b98101c0a506134adbc7decbdd7c26.jpg"} alt={"teste"}/>
                    <ImageGallery src={"https://i.pinimg.com/736x/69/6e/40/696e40288349d2c68150b6427fb699c2.jpg"} alt={"teste"}/>
                </div>
            </main>
            <Footer />
        </>
    )
}

function ImageGallery({src, alt}){
    return(
        <>
             <img className="w-full rounded-xl object-cover" src={src} alt={alt} />
        </>
    )
}