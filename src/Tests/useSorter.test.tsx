import React from "react"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"
import { useSorter } from "State/Hooks/useSorter"

jest.mock("State/Hooks/useGetParticipantes")

describe("Comportamento do sorteador,", () => {

    const participantes = ["Ana", "Sabrina", "Silas", "Maria", "Joao"]
    beforeEach(() => {
        (useGetParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test("Ninguém tirou a si mesmo", () => {
        let sortear = useSorter()
        let sorteados = sortear()
        participantes.forEach((participante) => {
            let secretFriend = sorteados.get(participante)
            expect(secretFriend).not.toEqual(participante)
        })
    })

})