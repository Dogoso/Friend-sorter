import { useNavigate } from "react-router-dom"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"

const Footer = () => {

    const listaParticipantes = useGetParticipantes()
    const navigate = useNavigate()

    const startPlaying = () => {
        navigate("/sorteio")
    }

    return (
        <footer>
            <button
                type="button"
                disabled={listaParticipantes.length < 3}
                onClick={startPlaying}
            >
                Iniciar brincadeira
            </button>
        </footer>
    )
}

export default Footer