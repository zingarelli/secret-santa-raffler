import { atom } from 'recoil';

// o atom se refere a uma pequena porção de um estado 

// guarda o estado global da lista de participantes
export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
});

// guarda o resultado do sorteio do amigo secreto
export const resultadoSorteioState = atom<Map<string, string>>({
    key: 'resultadoSorteioState',
    default: new Map()
})

// guarda o valor de uma mensagem de erro no formulário
export const erroState = atom<string>({
    key: 'erroState',
    default: ''
});