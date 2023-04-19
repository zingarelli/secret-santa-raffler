import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Sorteio from ".";

jest.mock('../../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

jest.mock('../../state/hooks/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})

describe('Na página de sorteio', () => {
    // mocks
    const participantes = ['Eeny', 'Meeny', 'Miny'];
    const resultado = new Map([
        ['Eeny', 'Miny'],
        ['Meeny', 'Eeny'],
        ['Miny', 'Meeny']
    ]);
    
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    });

    test('todos os participantes estão listados nas opções', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const lista = screen.getAllByRole('option');
        // considerando também a opção vazia
        expect(lista).toHaveLength(participantes.length+1);
    });

    test('exibe o amigo secreto ao selecionar um participante e clicar em sorteio', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText('Selecione seu nome');
        const button = screen.getByRole('button');
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });
        fireEvent.click(button);

        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();
    })

    test('o nome do amigo secreto desaparece após um tempo determinado', () => {
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText('Selecione seu nome');
        const button = screen.getByRole('button');
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });
        fireEvent.click(button);

        // aguarda o timer
        act(() => {
            jest.runAllTimers()
        })

        const amigoSecreto = screen.queryByRole('alert');
        expect(amigoSecreto).not.toBeInTheDocument();
    })
})

describe('Caso não haja participantes suficientes', () => {
    const participantes = ['Eeny, Meeny'];
    const resultado = new Map();

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('exibe somente uma informação', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const info = screen.getByText('Ops! Primeiro adicione os participantes.')
        expect(info).toBeInTheDocument();
    })
})