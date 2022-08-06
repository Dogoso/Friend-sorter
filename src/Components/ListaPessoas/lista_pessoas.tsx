import { useGetParticipantes } from "State/Hooks/useGetParticipantes"
import styles from "Styles/_globals.module.css"

const ListaPessoas = () => {
   
    const particpantsList: string[] = useGetParticipantes()
   
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {particpantsList.map((participante) => (
                    <li key={participante}>
                        {participante}
                    </li>
                ))}
            </ul>
        </section>
   )
}

export default ListaPessoas