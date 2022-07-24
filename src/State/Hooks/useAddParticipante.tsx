import { useRecoilState } from "recoil"
import { participantes } from "State/atom"
import useErrorMessage from "./useErrorMessage"

const useAdicionarParticipante = () => {
    const [particpantesList ,setParticipantes] = useRecoilState<String[]>(participantes)
    const setErrorMessage = useErrorMessage()
    return (participante: String) => {
        if(!particpantesList.includes(participante)) {
            setParticipantes(backParticipantes => [...backParticipantes, participante])
        } else {
            setErrorMessage(`O participante '${participante}' já foi adicionado.`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }
}

export default useAdicionarParticipante