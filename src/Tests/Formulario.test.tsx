import React from "react"
import { act, fireEvent, render, screen } from "@testing-library/react"
import Formulario from "../Components/Formulario/formulario"
import { RecoilRoot } from "recoil"

describe('Comportamento esperado do Formulario.tsx', () => {

    test('Se o formulário possui um input, e se o botão está desabilitado', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const botao = screen.getByRole('button')
    
        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })
    
    test('Se o formulário é resetado(limpo e focado no input novamente)', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: "Jonas Pereira"
            }
        })
        fireEvent.click(botao)
        expect(input).toHaveFocus()
        expect(input).toHaveValue("")
    })
    
    test('Se o feedback de erro ao ocorrer duplicidade de nomes na lista de participantes acontece', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const participantesInput = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const addParticipanteButton = screen.getByRole("button")
        fireEvent.change(participantesInput, {
            target: {
                value: "Jonas Pereira"
            }
        })
        fireEvent.click(addParticipanteButton)
        fireEvent.change(participantesInput, {
            target: {
                value: "Jonas Pereira"
            }
        })
        fireEvent.click(addParticipanteButton)
    
        const errorMessage = screen.getByRole("errorMessage")
        expect(errorMessage).toBeInTheDocument()
    })
    
    test('Se a mensagem de erro some da tela após 5 segundos.', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        
        const participanteInput = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const addParticipanteButton = screen.getByRole("button")
        fireEvent.change(participanteInput, {
            target: {
                value: "Jonas Pereira"
            }
        })
        fireEvent.click(addParticipanteButton)
        fireEvent.change(participanteInput, {
            target: {
                value: "Jonas Pereira"
            }
        })
        fireEvent.click(addParticipanteButton)
    
        let errorMessage = screen.queryByRole("errorMessage")
        expect(errorMessage).toBeInTheDocument()
        act(() => {
            jest.runAllTimers()
        });
        errorMessage = screen.queryByRole("errorMessage")
        expect(errorMessage).toBeNull()
    })

})