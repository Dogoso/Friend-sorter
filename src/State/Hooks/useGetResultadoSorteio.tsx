import { useRecoilValue } from "recoil"
import { resultadoSorteio } from "State/atom"

export const useGetResultadoSorteio = () => {
    let rslt = useRecoilValue(resultadoSorteio)
    return rslt
}