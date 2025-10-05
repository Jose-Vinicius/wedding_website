 const copyToClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return { success: true, message: "Chave copiada" };
        } catch (err) {
            return { success: false, message: "Falha ao copiar a chave" };
        }
}

export default copyToClipBoard;