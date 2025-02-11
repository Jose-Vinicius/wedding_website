import React from "react";

import Header from "../components/header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

export default function Dress(){
    return(
        <>
            <PageTitle title="Sugestão de vestimentas" />
            <Header />
            <main className="w-full flex flex-grow pt-[200px] pb-[50px] bg-old_paper justify-around text-center">
                <div className="">
                    <h2 className="font-josefin font-bold text-5xl pb-5">Para eles</h2>
                   <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                   <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                   <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                   <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                </div>
                <div className="w-[3px] bg-black rounded-full"></div>
                <div className="">
                    <h2 className="font-josefin font-bold text-5xl pb-5">Para elas</h2>
                    <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                    <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                    <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                    <ImageDress src={"https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h"} alt={"teste"}/>
                </div>
            </main>
            <Footer />
        </>
    )
}


function ImageDress({src, alt}){
    return(
        <>
             <img className="w-[500px] h-[400px] flex justify-center items-center pb-10" src={src} alt={alt} />
        </>
    )
}