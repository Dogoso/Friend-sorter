import { useNavigate } from "react-router-dom"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"
import { useSorter } from "State/Hooks/useSorter"
import styles from "Styles/_globals.module.css"

const Footer = () => {

    const listaParticipantes = useGetParticipantes()
    const navigate = useNavigate()
    const sortear = useSorter()

    const startPlaying = () => {
        sortear()
        navigate("/sorteio")
    }

    return (
        <footer className={styles.footer}>
            <button
                type="button"
                disabled={listaParticipantes.length < 3}
                onClick={startPlaying}
                className={styles.button}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                <span className={styles.start}>
                    Iniciar brincadeira!
                </span>
            </button>
            <img 
                src="src/imgs/sacolas.png" 
                alt="Sacolas de compras laranja e verde" 
            />
        </footer>
    )
}

export default Footer