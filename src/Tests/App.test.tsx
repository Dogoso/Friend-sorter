import { render } from "@testing-library/react"
import Formulario from "Components/Formulario/formulario"
import Header from "Components/Header/header"
import Main from "Components/Main/main"
import React from "react"
import { RecoilRoot } from "recoil"

describe("Renderização da página principal", () => {

    test("Quando acessada", () => {
        const { container } = render(
            <RecoilRoot>
                <Header/>
                <Main>
                    <Formulario/>
                </Main>
            </RecoilRoot>
        )
        expect(container).toMatchSnapshot()
    })

})