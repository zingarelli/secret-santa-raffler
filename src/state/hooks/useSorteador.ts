import { useListaParticipantes } from "./useListaParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoSorteioState } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";

// salva o resultado do sorteio no state resultadoSorteioState
export const useSorteador = () => {
    const participantes = useListaParticipantes();
    const setResultadoSorteio = useSetRecoilState(resultadoSorteioState);
    
    return () => {
        const resultado = realizarSorteio(participantes);
        setResultadoSorteio(resultado);
    }
}