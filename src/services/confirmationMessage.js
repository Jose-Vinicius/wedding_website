const messages = [
    "Ficamos muito felizes com sua presença!",
    "Que alegria saber que você estará conosco nesse dia tão especial!",
    "Mal podemos esperar para celebrar esse momento incrível ao seu lado!",
    "Sua presença tornará nosso casamento ainda mais especial!",
    "Estamos contando os dias para compartilhar essa felicidade com você!",
    "Obrigado por confirmar! Será uma honra ter você conosco!",
    "Prepare-se para um dia cheio de amor, alegria e celebração!",
    "Nossa felicidade só aumenta sabendo que você estará lá!",
    "Seu lugar já está reservado para viver esse momento inesquecível conosco!",
    "Nosso grande dia será ainda mais especial com você presente!"
]

export function randomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}


//TODO

//transformar este array em um request para o baserow para buscar as mensagens de confirmação quando for carregada a tela de confirmação de presença