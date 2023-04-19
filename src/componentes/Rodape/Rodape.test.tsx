import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from ".";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

jest.mock('../../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

// nomeando uma função para ter acesso a ela nas assertivas dos testes
// ATENÇÃO: é necessário usar o prefixo "mock" para não dar erro de escopo
const mockNavegarPara = jest.fn();

jest.mock('react-router-dom', () => {
    return {        
        useNavigate: () => mockNavegarPara
    }
})

// dublando sorteio
const mockSorteio = jest.fn();
jest.mock('../../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('Quando não há participantes suficientes', () => {
    test('o botão para iniciar o sorteio não está habilitado', () => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Matheus', 'Teresa']);
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        expect(screen.getByRole('button')).toBeDisabled();
    });
});

describe('Quando há participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Eeny', 'Meeny', 'Miny']);
    });
    
    test('o botão para iniciar o sorteio é habilitado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    test('o sorteio é realizado e a aplicação vai para a rota sorteios após clicar no botão', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        fireEvent.click(screen.getByRole('button'));

        expect(mockSorteio).toHaveBeenCalledTimes(1);
        expect(mockNavegarPara).toHaveBeenCalledTimes(1);
        expect(mockNavegarPara).toHaveBeenCalledWith('/sorteio');
    })
})