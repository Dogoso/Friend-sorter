const Formulario = () => {
    return (
        <form>
            <input type="text" placeholder="Insira os nomes dos participantes" />
            <button type="submit" disabled={true}>Adicionar</button>
        </form>
    )
}

export default Formulario