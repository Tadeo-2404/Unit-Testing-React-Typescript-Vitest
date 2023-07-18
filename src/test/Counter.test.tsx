import { Counter } from "../components/Counter";
import { render, screen, fireEvent } from "@testing-library/react";

describe(Counter, () => {
    test("renders the Counter component", () => {
        render(<Counter/>);
        const countParagraph = screen.getByText(/Count:/i);
        const countButton = screen.getByText('+');
        expect(countParagraph).toBeDefined();
        expect(countButton).toBeDefined();
    });

    test('increments the count when the button is clicked', () => {
        render(<Counter/>);
        const countParagraph = screen.getByText(/Count:/i);
        const countButton = screen.getByText('+');

        fireEvent.click(countButton);
        expect(countParagraph).toBeDefined();
    })
})