import React, { useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import useAdicionarParticipante from "State/Hooks/useAddParticipante"
import useGetErrorMessage from "State/Hooks/useGetErrorMessage"
import styles from "Styles/_globals.module.css"

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
            <h1 className={styles.title}>
                Vamos começar!
            </h1>
            <form onSubmit={participanteFormSubmit} className={styles.form}>
                <input 
                    ref={participanteInputRef}
                    className={styles.input}
                    type="text" 
                    placeholder="Insira os nomes dos participantes"
                    value={participante}
                    onChange={(e) => setParticipante(e.target.value)}
                />
                <button 
                    className={styles.add}
                    type="submit" 
                    disabled={!participante}
                >
                    Adicionar
                </button>
            </form>
            <div>
                <Outlet/>
            </div>
        </section>
    )
}

export default Formulario