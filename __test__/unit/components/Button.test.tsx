import { fireEvent, render, screen } from '@testing-library/react';
import Button from 'components/Button/Button';

describe('Render Button component', () => {
    test("Render 'Añadir' button and check if it is in the document", async () => {
        render(
            <Button
                text="testButton"
                action={onclick}
                name={'collar'}
                category="jewelery"
                variant="button"
            />,
        );
        const button = await screen.getByText(/testButton/i);
        expect(button).toBeInTheDocument();
    });

	test("Render 'Añadir' button and press it", async () => {
        const btnOnClick = jest.fn();
        render(
            <Button
                text="testButton"
                action={btnOnClick}
                name={'collar'}
                category="jewelery"
                variant="button"
            />,
        );
        const button = await screen.getByText(/testButton/i);
        const clicked = await fireEvent.click(button);
        expect(clicked).toBe(true);
    });

    test("Render 'más colores' button and check if it is in the document", async () => {
        render(
            <Button
                text="testButton"
                action={onclick}
                name={'más colores'}
                category="jewelry"
                variant="buttonAlt"
            />,
        );
        const button = await screen.getByText(/testButton/i);
        expect(button).toBeInTheDocument();
    });

	test("Render 'más colores' button and press it", async () => {
        const btnOnClick = jest.fn();
        render(
            <Button
                text="testButton"
                action={btnOnClick}
                name={'más colores'}
                category="jewelry"
                variant="buttonAlt"
            />,
        );
        const button = await screen.getByText(/testButton/i);
        const clicked = await fireEvent.click(button);
        expect(clicked).toBe(true);
    });

    test("Check if className is set to .ButtonNone which hides the button from the screen", async () => {
        render(
            <Button
                text="testButton"
                action={onclick}
                name={'más colores'}
                category="electronics"
                variant="buttonAlt"
            />,
        );
        const button = await screen.getByText(/testButton/i);
        expect(button).toHaveClass('ButtonNone');
    });
});
