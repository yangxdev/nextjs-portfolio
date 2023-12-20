import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTopButton from '@ui/ScrollToTopButton';
import { after } from 'node:test';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('ScrollToTopButton', () => {
    it('renders without crashing', () => {
        render(<ScrollToTopButton />);
    });

    it('should not be visible initially', () => {
        const { getByRole } = render(<ScrollToTopButton />);
        const button = getByRole('button');
        expect(button).toHaveClass('translate-y-52');
    });

    // !! to review, proposal: test browser behavior with Playwrigh
    /* it('becomes visible after scrolling', () => {
        const { getByRole } = render(<ScrollToTopButton />);

        const button = getByRole('button');
        expect(button).toHaveClass('translate-y-52');

        act(() => {
            global.window.scrollY = 600;
            fireEvent.scroll(global.window);
        })

        act(() => {
            render(<ScrollToTopButton />);
        })

        // test: forcefully remove translate-y-52 class and add translate-y-0 class
        // button.classList.remove('translate-y-52');
        // button.classList.add('translate-y-0');

        // button = getByRole('button');
        expect(button).toHaveClass('translate-y-0');
    }); */
});

afterAll(() => {
    jest.clearAllMocks();
});