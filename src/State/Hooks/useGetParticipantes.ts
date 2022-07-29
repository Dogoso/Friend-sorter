import { useRecoilValue } from "recoil"
import { participantes } from "State/atom"

export const useGetParticipantes = () => {
    return useRecoilValue(participantes)
}