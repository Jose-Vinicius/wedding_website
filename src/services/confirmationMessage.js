import { getConfirmationMessage } from "./baserowService"

export async function loadMessage(){
    return await getConfirmationMessage()
}

export function randomMessage(messages){

    const listMessage = messages.map(e => e.Message);

    return listMessage[Math.floor(Math.random() * listMessage.length)]
}


