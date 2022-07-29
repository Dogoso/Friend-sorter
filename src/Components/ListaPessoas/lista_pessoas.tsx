import { useGetParticipantes } from "State/Hooks/useGetParticipantes"

const ListaPessoas = () => {
   
    const particpantsList: string[] = useGetParticipantes()
   
    return (
        <section>
            <ul>
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