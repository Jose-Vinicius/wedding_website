import {QRCodeCanvas} from "qrcode.react"

export default function PixQRCode({payload}){
    return (
        <div className="flex flex-col items-center bg-white p4 rounded-2xl shadow-md">
            <QRCodeCanvas 
                value={payload}
                size={256}
                bgColor="#ffffff"
                fgColor="#000000"
                level="Q"
                imageSettings={{
                    height: 16,
                    width: 16,
                    excavate: true
                }}
            /> 
        </div>
    )
}