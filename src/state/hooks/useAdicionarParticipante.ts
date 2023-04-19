import { useRecoilState, useSetRecoilState } from 'recoil';
import { erroState, listaParticipantesState } from '../atom';

// hook que utiliza o setter do estado ListaParticipantesState
export const useAdicionarParticipante = () => {
    const [lista, setLista] = useRecoilState(listaParticipantesState);
    const setErro = useSetRecoilState(erroState);

    return (nomeParticipante: string) => {
        if (lista.includes(nomeParticipante)) {
            // envia erro de duplicidade
            setErro('Nomes duplicados não são permitidos!');

            // o erro deve sumir após 3 segundos
            setTimeout(() => {
                setErro('');
            }, 3000)
            return; 
        }
        return setLista(listaAtual => [...listaAtual, nomeParticipante]);
    }
}