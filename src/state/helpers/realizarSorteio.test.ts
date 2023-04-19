import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não deve sortear seu próprio nome', () => {
        const participantes = ['Eeny', 'meeny', 'miny', 'moe'];
        const resultado = realizarSorteio(participantes);

        participantes.forEach(participante => {
            const amigoSecreto = resultado.get(participante)
            expect(amigoSecreto).not.toEqual(participante);
        })
    })
})