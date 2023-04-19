import { render } from "@testing-library/react"
import TemplatePagina from ".";

describe('A página de template', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render(<TemplatePagina />);

        expect(container).toMatchSnapshot();
    });
})