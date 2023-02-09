import VerticalTabs from "./VerticalTabs.svelte";
import { render, screen } from '@testing-library/svelte';

describe("VerticalTabs Component", () => {

    test("should render the component", () => {

        render(VerticalTabs);

        const firstTabNode = screen.getByText(/First Tab Heading/i)

        expect(firstTabNode).toBeTruthy()
    });

})