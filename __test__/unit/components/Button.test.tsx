import { fireEvent, render, screen } from '@testing-library/react';
import Button from 'components/Button/Button';

describe('Render Button component', () => {
    test("Render 'Añadir' Button and press it", async () => {
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

    test("Render 'más colores' Button and press it", async () => {
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

    test("Hide 'más colores' button's visibility if category = 'electronics'", async () => {
        render(
            <Button
                text="testButton"
                action={onclick}
                name={'más colores'}
                category="electronics"
                variant="buttonAlt"
            />,
        );
        expect(screen.getByText(/testButton/i)).not.toBeVisible();
    });
});
