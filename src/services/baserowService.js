import axios from "axios";

const BASEROW_API_KEY = import.meta.env.VITE_BASEROW_API_KEY;

const base_url = "https://api.baserow.io/api/database"
const table_guest_id = "443562"
const table_message_id = "451460"
const table_gifts_id = "451458"
const table_gallery_id = "606236"
const col_phoneNumber_ID = "3442178"

const baserow_api = axios.create({
    baseURL: base_url,
    headers:{
        "Authorization": `Token ${BASEROW_API_KEY}`,
        "Content-Type": "application/json"
    }
})

export async function getGuest(phoneNumber){
    try{
        const { data } = await baserow_api.get(
            `/rows/table/${table_guest_id}/?user_field_names=true&filter__field_${col_phoneNumber_ID}__contains=${phoneNumber}`
        )

        const result = data.results

        // Se quiser buscar aproximado, não faz sentido exigir igualdade exata
        // Caso ainda queira uma limpeza mínima (tirar espaços e comparar sem formatação):
        // const guestFilter = result.filter(guest => 
        //     String(guest.phone_number).replace(/\D/g, "")
        //         .includes(String(phoneNumber).replace(/\D/g, ""))
        // )

        if (result.length > 0) {
            return result
        }

        return null
        
    } catch(error){
        console.error("Erro ao buscar convidado", error.response?.data || error.message)
        return null
    }
}


export async function confirmPresence(guestID, confirmations){
    try{
        const payload = {
            confirmation_guest: confirmations.confirmation_guest,
            confirm_companion_1: confirmations.confirm_companion_1,
            confirm_companion_2: confirmations.confirm_companion_2,
            confirm_companion_3: confirmations.confirm_companion_3,
            confirm_companion_4: confirmations.confirm_companion_4,
            confirm_companion_5: confirmations.confirm_companion_5
        }

        const response = await baserow_api.patch(`/rows/table/${table_guest_id}/${guestID}/?user_field_names=true`, payload)
        return response.data
    } catch(e){
        console.error("erro ao confirmar presença")
    }
}


export async function getConfirmationMessage() {
    try{
        const {data} = await baserow_api.get(`/rows/table/${table_message_id}/?user_field_names=true`)

        return data.results

    } catch(e){
        console.error("erro ao buscar mensagem de confirmação",e)
    }
}

export async function getGifts() {
    try{
        const {data} = await baserow_api.get(`/rows/table/${table_gifts_id}/?user_field_names=true`)

        return data.results

    } catch(e){
        console.error("erro ao buscar presentes",e)
    }
}

export async function getGallery() {
    try{
        const {data} = await baserow_api.get(`/rows/table/${table_gallery_id}/?user_field_names=true`)

        return data.results

    } catch(e){
        console.error("erro ao buscar galeria",e)
    }
}