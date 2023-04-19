import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from "./Formulario";
import { RecoilRoot } from 'recoil';

describe('O comportamento do componente Formulario.tsx', () => {
    // necessário renderizar com o Recoil, que está gerenciando os estados do projeto
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

        const botao = screen.getByRole('button');

        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    })

    test('caso exista um nome preenchido, adiciona o participante, limpa o input e coloca o foco novamente no input', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

        const botao = screen.getByRole('button');

        // simulando as interações com FireEvent
        fireEvent.change(input, {
            target: {
                value: 'Matheus'
            }
        });

        fireEvent.click(botao);

        // após o nome ser enviado, o input deve estar vazio e com o foco nele
        // (para poder continuar adicionando nomes após apertar o enter)
        expect(input).toHaveFocus();
        expect(input).toHaveValue('');
    })

    test('ao submeter, exibe mensagem de erro se tentar adicionar um nome já existente na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');

        // 1ª interação
        fireEvent.change(input, {
            target: {
                value: 'Matheus'
            }
        });
        fireEvent.click(button);

        // 2ª interação
        fireEvent.change(input, {
            target: {
                value: 'Matheus'
            }
        });
        fireEvent.click(button);

        const message = screen.getByRole('alert');
        expect(message).toHaveTextContent('Nomes duplicados não são permitidos!');
    });

    test('a mensagem de erro deve sumir após um tempo determinado', () => {
        // faz o mock dos timers utilizados na aplicação
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');

        // 1ª interação
        fireEvent.change(input, {
            target: {
                value: 'Matheus'
            }
        });
        fireEvent.click(button);

        // 2ª interação
        fireEvent.change(input, {
            target: {
                value: 'Matheus'
            }
        });
        fireEvent.click(button);

        // 1ª consulta, erro aparece
        let message = screen.queryByRole('alert');
        expect(message).toBeInTheDocument();

        // aguarda o timer
        // usando o act para garantir que os estados estejam atualizados
        // devido à operação assíncrona do timeout
        act(() => {
            jest.runAllTimers();
        });
        
        // 2ª consulta, não deve haver mais a mensagem
        // é necessário fazer a consulta novamente, pois 
        // a tela foi alterada e re-renderizada
        message = screen.queryByRole('alert');
        expect(message).toBeNull();
    });

});