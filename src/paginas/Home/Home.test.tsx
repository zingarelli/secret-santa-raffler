import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Home from "."

// mockando o useNavigate para não precisar envolver o React Router no teste

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => jest.fn()
    }
})

describe('a página inicial', () => {
    test('deve ser renderizada corretamente', () => {
        // a propriedade container possui o DOM renderizado
        const { container } = render(
            <RecoilRoot>
                <Home />
            </RecoilRoot>
        )
        expect(container).toMatchSnapshot();
    })
});