import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
    const totalParticipantes = participantes.length;
    // lista embaralhada pela biblioteca just-shuffle
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>();

    // o amigo secreto será o próximo participante da lista embaralhada
    for (let index = 0; index < totalParticipantes; index++) {
        // o último participante receberá o primeiro como amigo secreto
        const indexDoAmigo = index === (totalParticipantes - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indexDoAmigo]);
    }

    return resultado;
}