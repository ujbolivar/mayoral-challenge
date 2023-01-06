import { fireEvent, render, screen } from '@testing-library/react';
import Button from 'components/Button/Button';

describe('Render Button component', () => {
    test('Render Button with disabled prop', () => {
        const btnOnClick = jest.fn();
        render(<Button text="testButton" action={btnOnClick} name={"collar"} category="electronics" variant="button" />);
        expect(screen.getByText(/testButton/i)).toBeInTheDocument();
    });

    test('Render Button and press it', async () => {
        const btnOnClick = jest.fn();
        render(<Button text="testButton" action={btnOnClick} name={"collar"} category="electronics" variant="button" />);
        const button = await screen.getByText(/testButton/i);
        const clicked = await fireEvent.click(button);
        expect(clicked).toBe(true);
    });
});
