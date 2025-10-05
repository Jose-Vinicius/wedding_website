export default function ButtonClipboard({text, pixKey, copyText}){

    return(
        <>
            <button 
                className="bg-purple text-white font-josefin font-bold text-2xl px-6 py-3 m-5 rounded-full hover:bg-purple/90 transition-colors"
                onClick={() => {
                    copyText(pixKey) 
                }}
            >
                {text}
            </button>
        </>
    )
}