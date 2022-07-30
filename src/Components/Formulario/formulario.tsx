import React, { useRef, useState } from "react"
import useAdicionarParticipante from "State/Hooks/useAddParticipante"
import useGetErrorMessage from "State/Hooks/useGetErrorMessage"
import styles from "./formulario.module.css"

const Formulario = () => {

    const [participante, setParticipante] = useState("")
    const participanteInputRef = useRef<HTMLInputElement>(null)
    const addParticipante = useAdicionarParticipante()
    const errorMessage = useGetErrorMessage()

    const participanteFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addParticipante(participante)
        setParticipante("")
        participanteInputRef.current?.focus()
    }

    return (
        <section>
            {errorMessage && 
                <p role="errorMessage" className={styles.error}>
                    {errorMessage}
                </p>
            }
            <p>Vamos começar!</p>
            <form onSubmit={participanteFormSubmit}>
                <input 
                    ref={participanteInputRef}
                    type="text" 
                    placeholder="Insira os nomes dos participantes"
                    value={participante}
                    onChange={(e) => setParticipante(e.target.value)}
                />
                <button type="submit" disabled={!participante}>
                    Adicionar
                </button>
            </form>
        </section>
    )
}

export default Formulario