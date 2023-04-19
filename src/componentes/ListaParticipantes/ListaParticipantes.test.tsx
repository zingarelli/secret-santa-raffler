import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from ".";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

// dublando o hook useListaParticipante
jest.mock('../../state/hooks/useListaParticipantes', () => {
    // ao chamar o hook, retorna uma função mockada pelo jest
    return {
        useListaParticipantes: jest.fn()
    }
})

describe('Uma lista de participantes vazia', () => {
    beforeEach(() => {
        // mockando o retorno do hook
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    })
    test('deve ser renderizada sem elementos', () => {        
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    })
})

describe('Uma lista preenchida de participantes', () => {
    const participantes = ['Matheus', 'Susana'];
    beforeEach(() => {
        // mockando o retorno do hook
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('deve ser renderizada com os participantes', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})