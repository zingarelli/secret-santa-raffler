import { useRecoilValue } from "recoil";
import { resultadoSorteioState } from "../atom";

export function useResultadoSorteio() {
    return useRecoilValue(resultadoSorteioState);
}