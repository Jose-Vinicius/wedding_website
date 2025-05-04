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
                    <ImageGallery src={"/src/assets/image/galery/1.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/2.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/3.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/4.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/5.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/6.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/7.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/8.jpeg"} alt={"teste"}/>
                    <ImageGallery src={"/src/assets/image/galery/9.jpeg"} alt={"teste"}/>

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