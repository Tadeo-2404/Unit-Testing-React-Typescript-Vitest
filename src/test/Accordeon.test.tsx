import { Accordeon } from "../components/Accordeon";
import { render, screen, fireEvent } from "@testing-library/react";

describe(Accordeon, () => {
    beforeEach(() => {
        render(
            <Accordeon title="hello">
              <h3>My content</h3>
              <p>some content</p>
            </Accordeon>
          );
    })

    test("should show the title all the time", () => {
        expect(screen.getByText('hello')).toBeDefined();
    });

    test("should not show the content at the start", () => {
        expect(screen.queryByText(/content/i)).toBeNull();
    });

    test("should show the content when clicked", () => {
       const button = screen.getByRole("button", {name: /open/i});
       fireEvent.click(button);
       expect(screen.queryAllByText(/content/i)).toBeDefined();
    });

    test("should show the content when clicked", () => {
        const button = screen.getByRole("button", {name: /open/i});
        fireEvent.doubleClick(button);
        expect(screen.queryByText(/content/i)).toBeNull();
     });


}); 