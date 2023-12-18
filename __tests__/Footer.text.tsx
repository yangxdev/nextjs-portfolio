// Footer.test.js
import React from 'react';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { useInView } from 'react-intersection-observer'
import Footer from '@ui/Footer'
import Button from '@ui/Button';
import LogoSmall from '../public/logo_small_gray.jpg';


jest.mock('react-intersection-observer');

describe('Footer', () => {
    (useInView as jest.Mock).mockImplementation(() => [null, true]);
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    it('should render the title component', () => {
        render(<Footer />);
        const footerElement = screen.getByText("LET'S GET IN TOUCH");
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the button contents', () => {
        render(<Footer />);
        const emailButton = screen.getByText('Email M');
        const telegramButton = screen.getByText('Telegram');
        const linkedinButton = screen.getByText('LinkedIn');

        expect(emailButton).toBeInTheDocument();
        expect(telegramButton).toBeInTheDocument();
        expect(linkedinButton).toBeInTheDocument();
    })

    it('should test the email button', () => {
        render(<Footer />);

        expect(screen.getByRole('link', { name: 'Email Me' })).toHaveAttribute(
            'href',
            'mailto:yangxdev@gmail.com'
        )
    });

    const testButtonClick = (buttonContent: string) => {
        const onClickMock = jest.fn();

        const { getByTestId } = render(
            <Button testid={buttonContent} type='main' content={buttonContent} onClick={onClickMock} />
        );

        const button = getByTestId(buttonContent);
        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalled();
    }
    test('should test the Telegram button', () => {
        testButtonClick('Telegram');
    });
    test('should test the LinkedIn button', () => {
        testButtonClick('LinkedIn');
    });

    it('should render the Footer section correctly', () => {
        const { getByTestId, getByAltText } = render(<Footer />);

        expect(getByTestId('footer-copyright')).toBeInTheDocument();
        expect(getByTestId('footer-email')).toBeInTheDocument();
        expect(getByTestId('footer-location')).toBeInTheDocument();

        const logoImage = getByAltText('YX Logo') as HTMLImageElement;
        expect(logoImage).toBeInTheDocument();
        // expect(logoImage.src).toEqual(LogoSmall.src);

        const scrollToMock = jest.fn();
        global.scrollTo = scrollToMock;

        fireEvent.click(logoImage);

        expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    it('should test the responsiveness of the footer', () => {
        const { getByTestId } = render(<Footer />);

        // desktop: footer-text-buttons flex text-sm mt-8 
        // mobile: footer-text-buttons flex text-sm mt-8 flex-col items-center

        const footerTextButtons = getByTestId('footer-text-buttons');
        expect(footerTextButtons).not.toHaveClass('flex-col items-center'); // desktop

        act(() => {
            window.innerWidth = 500;
            window.dispatchEvent(new Event('resize'));
        });
        waitFor(() => {
            expect(footerTextButtons).toHaveClass('flex-col items-center'); // mobile
        });

    });
})
