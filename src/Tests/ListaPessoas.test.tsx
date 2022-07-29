import { render, screen } from "@testing-library/react"
import ListaPessoas from "Components/ListaPessoas/lista_pessoas"
import { RecoilRoot } from "recoil"
import { useGetParticipantes } from "State/Hooks/useGetParticipantes"

jest.mock("State/Hooks/useGetParticipantes")

describe("Uma lista de participantes", () => {
    beforeEach(() => {
        (useGetParticipantes as jest.Mock).mockReturnValue([])
    })
    test("É renderizada vazia", () => {
        render(
            <RecoilRoot>
                <ListaPessoas/>
            </RecoilRoot>
        )
        const listaPessoas = screen.queryAllByRole("listitem")
        expect(listaPessoas).toHaveLength(0)
    })
})

describe("Uma lista de participantes é preenchida,", () => {
    const usersList = ["Mario", "Alex"]
    beforeEach(() => {
        (useGetParticipantes as jest.Mock).mockReturnValue(usersList)
    })
    test("e renderizada com participantes", () => {
        render(
            <RecoilRoot>
                <ListaPessoas/>
            </RecoilRoot>
        )
        const listaPessoas = screen.queryAllByRole("listitem")
        expect(listaPessoas).toHaveLength(usersList.length)
    })

})