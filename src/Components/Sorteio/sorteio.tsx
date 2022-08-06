import { useEffect, useState } from "react"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"
import { useGetResultadoSorteio } from "State/Hooks/useGetResultadoSorteio"
import styles from "Styles/_globals.module.css"

const Sorteio = () => {
    
    const participantes = useGetParticipantes()
    const [selecionado, setSelecionado] = useState("")
    const [secretFriend, setSecretFriend] = useState<string>("")
    const resultadoSorteio = useGetResultadoSorteio()
    
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(resultadoSorteio.has(selecionado)) {
            setSecretFriend(resultadoSorteio.get(selecionado)!)
        }
    }

    const hideAndSelectParticipante = (selectValue: string) => {
        setSelecionado(selectValue)
        setSecretFriend("")
    }

    useEffect(() => {
        if(participantes.length > 0) setSelecionado(participantes[0])
    }, [participantes])

    return (
        <main>
            <h1 className={styles.title}>
                Quem vai tirar o papelzinho?
            </h1>
            <form
                onSubmit={onFormSubmit}
                className={styles.sorteio}
            >
                <select
                    className={styles["input-select"]}
                    placeholder="Selecione seu nome..."
                    value={selecionado}
                    onChange={(e) => hideAndSelectParticipante(e.target.value)}
                >
                    {participantes.map((participante) => (
                        <option key={participante} value={participante}>
                            {participante}
                        </option>
                    ))}
                </select>
                <p
                    className={styles["side-text"]}
                >
                    Clique em em sortear para ver quem é seu <br/> amigo secreto!
                </p>
                <button 
                    className={styles.button}
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-dice-5-fill" viewBox="0 0 16 16">
                        <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    <span>Sortear</span>
                </button>
                {secretFriend.length > 0 && (
                    <p 
                        className={styles.friend}
                        role="alert"
                    >
                        {secretFriend}
                    </p>
                )}
            </form>
            <div className={styles.plane}>
                <img src="src/imgs/aviao.png" alt="Aviãozinho de papel verde" />
            </div>
        </main>
    )
}

export default Sorteio