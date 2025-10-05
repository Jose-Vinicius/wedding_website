export default function CopyAndPastePix(pixKey, receiverName, receiverCity, value ){
    const fieldsMap = new Map([
        ["00", "01"], //Payload Format Indicator
        ["52", "0000"], //Merchant Category Code (0000 = Não Informado)
        ["53", "986"], //Transaction Currency (986 = padrão para BRL)
        ["54", String(value).replace(/,/g,".")], //Transaction Amount (valor com 2 casas decimais separado por .)
        ["58", "BR"], //Country Code
        ["59", receiverName], //Merchant Name (nome do recebedor)
        ["60", receiverCity], //Merchant City (cidade do recebedor)
    ])

    const merchantInformationMap = new Map([
        ["00", "BR.GOV.BCB.PIX"], //GUI (balor padrão)
        ["01", pixKey] //Chave Pix (qualquer chave)
    ])

    const additionalDataMap = new Map([
        ["05", "***"]
    ])
          
   const result = buildPixPayload(fieldsMap, merchantInformationMap, additionalDataMap)

   return result
}

function buildPixPayload(fields, merchantInfo = null, additionalInfo = null){
    const parts = [];
    let merchantData = ""
    let additionalData = ""
    if(merchantInfo){
        merchantData = buildNestedTlv("26", merchantInfo); //26 valor padrão para o PIX
    }
    if(additionalInfo){
        additionalData = buildNestedTlv("62", additionalInfo)
    }
    for(const [tag, value] of fields.entries()){ //percorre o objeto fieldsMap e cria o TLV para cada tag e valor
        parts.push(tlv(tag, value));
    }
    parts.splice(1, 0, merchantData);
    parts.splice(8, 0, additionalData);
    const base = parts.join("");
    const toCrc = base + "6304"; //adiciona o campo do CRC com valor 6304 valor EXIGIDO
    const crc = crc16ccitt(toCrc)
    return toCrc + crc 
}

function tlv(tag, value){
    const len = String(value.length).padStart(2, '0'); //analisa o tamanho do valor e preenche com 0 a esquerda até atingir comprimento de 2 digitos
    return tag+len+value;
}

function buildNestedTlv(tag, subdict){
    const parts = [];
    for (const [key, value] of subdict.entries()){
        parts.push(tlv(key, value));
    }
    const inner = parts.join("");
    return tlv(tag, inner);
}

function crc16ccitt(payload){
    const data = new TextEncoder().encode(payload)
    let crc = 0xFFFF;
    for (let b of data){
        crc ^= (b << 8) //Move 8 bits para frente
        for (let i = 0; i < 8; i++){
            crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
            crc &= 0xFFFF
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0")
}
