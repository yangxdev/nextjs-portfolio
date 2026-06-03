import '@testing-library/jest-dom'
import { useInView } from 'react-intersection-observer'
import { render, screen, fireEvent } from '@testing-library/react'
import { useIsMobile } from '@functional/useIsMobile'
import Button from '@ui/Button'

jest.mock('react-intersection-observer');

xdescribe('Button', () => {
    test('renders the button with the correct content', () => {
        render(<Button type="main" content="Click me" />)
        const buttonElement = screen.getByText('Click me')
        expect(buttonElement).toBeInTheDocument()
    })

    test('applies the correct style based on the button type', () => {
        render(<Button type="main" content="Click me" />);
        const buttonElement = screen.getByText('Click me');

        expect(buttonElement).toHaveClass('common-button-style');
        expect(buttonElement).toHaveClass('main-button');
    });

    test('handles onClick event when not disabled', () => {
        const onClickMock = jest.fn();
        render(<Button type="main" content="Click me" onClick={onClickMock} />);
        const buttonElement = screen.getByText('Click me');

        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('applies correct styles when disabled', () => {
        render(<Button type="main" content="Click me" disabled />);
        const buttonElement = screen.getByText('Click me');

        expect(buttonElement).toHaveClass('opacity-50');
        expect(buttonElement).toHaveClass('select-none');
        expect(buttonElement).toHaveClass('cursor-default');
        expect(buttonElement).not.toHaveClass('cursor-pointer');
    });
});