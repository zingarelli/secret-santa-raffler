import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

// encapsulando o Recoil em um hook, para que os componentes
// não precisem conhecer o Recoil
export const useMensagemErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem;
}