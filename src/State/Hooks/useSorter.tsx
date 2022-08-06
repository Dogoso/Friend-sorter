import { useSetRecoilState } from "recoil"
import { shuffle } from "Utils/shuffle"
import { useGetParticipantes } from "./useGetParticipantes"
import { resultadoSorteio } from "State/atom"

export const useSorter = () => {
    let participantesSorted = shuffle(useGetParticipantes())
    let participantesMapped = new Map<string, string>()
    participantesSorted.forEach((participante: string, index: number) => {
        if(index < participantesSorted.length - 1) {
            participantesMapped.set(participante, participantesSorted[index + 1])
        }else {
            participantesMapped.set(participante, participantesSorted[0])
        }
    })

    let setter = useSetRecoilState(resultadoSorteio)
    setter(participantesMapped)

    return () => participantesMapped
}