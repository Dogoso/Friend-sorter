import { fireEvent, render, screen } from "@testing-library/react"
import Footer from "Components/Footer/footer"
import React from "react"
import { RecoilRoot } from "recoil"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"

jest.mock("State/Hooks/useGetParticipantes")

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe("Quando a lista estiver vazia", () => {
    beforeEach(() => {
        (useGetParticipantes as jest.Mock).mockReturnValue([])
    })
    test("a brincadeira não pode ser iniciada", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )
        const button = screen.getByRole("button")
        expect(button).toBeDisabled()
    })
})

describe("Quando a lista estiver pronta", () => {
    beforeEach(() => {
        (useGetParticipantes as jest.Mock).mockReturnValue(["Maria", "Antonieta", "Silas"])
    })
    test("a brincadeira pode ser iniciada", () => {
        render(
            <RecoilRoot>
                <Footer/>
            </RecoilRoot>
        )
        const button = screen.getByRole("button")
        expect(button).not.toBeDisabled()
    })

    test("e o botao clicado, a brincadeira é iniciada", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(mockNavigate).toBeCalledTimes(1)
        expect(mockNavigate).toBeCalledWith('/sorteio')
    })
})