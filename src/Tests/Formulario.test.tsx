import React from "react"
import { render, screen } from "@testing-library/react"
import Formulario from "../Components/Formulario/formulario"

test('Se o formulário possui um input, e se o botão está desabilitado', async () => {
    render(<Formulario />)
    const input = await screen.findByPlaceholderText("Insira os nomes dos participantes")
    const botao = await screen.findByRole('button')

    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
})