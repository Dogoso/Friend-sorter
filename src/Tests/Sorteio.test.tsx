import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Sorteio from "Components/Sorteio/sorteio"
import { RecoilRoot } from "recoil"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"
import { useGetResultadoSorteio } from "State/Hooks/useGetResultadoSorteio"

jest.mock("State/Hooks/useGetResultadoSorteio")
jest.mock("State/Hooks/useGetParticipantes")

describe("Página de sorteio", () => {

    const participantes = ["Silas", "Malu", "Sonyblade"]
    const participantesMapped = new Map([
        ["Silas", "Malu"],
        ["Malu", "Sonyblade"],
        ["Sonyblade", "Silas"],
    ])
    beforeEach(() => {
        (useGetParticipantes as jest.Mock).mockReturnValue(participantes);
        (useGetResultadoSorteio as jest.Mock).mockReturnValue(participantesMapped);
    })
    test("Todos podem escolher seu nome para sortear", () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const selectExists = screen.getByPlaceholderText("Selecione seu nome...")
        const listaParticipantes = screen.queryAllByRole("option")
        expect(listaParticipantes).toHaveLength(participantes.length)
        expect(selectExists).toBeInTheDocument()
    })

    test("Se o amigo secreto é exibido na tela", () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const select = screen.getByPlaceholderText("Selecione seu nome...")
        fireEvent.change(select, {target: {
            value: participantes[0]
        }})
        const button = screen.getByRole("button")
        fireEvent.click(button)
        const secretFriend = screen.getByRole("alert")
        expect(secretFriend).toBeInTheDocument()
    })

    test("Se o amigo secreto é escondido quando outro participante é selecionado", () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const select = screen.getByPlaceholderText("Selecione seu nome...")
        fireEvent.change(select, { target: {
            value: participantes[0]
        }})
        const button = screen.getByRole("button")
        fireEvent.click(button)
        fireEvent.change(select, {target: {
            value: participantes[1]
        }})
        const alert = screen.getByRole("alert")
        expect(alert).not.toBeInTheDocument()
    })

})