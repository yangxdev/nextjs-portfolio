import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Biography from '../app/Biography'
import Button from '../app/Button'
import Footer from '../app/Footer'
import { useInView } from 'react-intersection-observer'
import { useIsMobile } from '../app/useIsMobile'

jest.mock('react-intersection-observer');

describe('Biography', () => {
    useInView.mockImplementation(() => [null, true]);
    test('renders the component', () => {
        render(<Biography />)
        const sectionElement = screen.getByTestId('Biography')
        expect(sectionElement).toBeInTheDocument()
    })

    test('renders academic journey information', () => {
        render(<Biography />);
        const academicJourneyElement = screen.getByText('Academic Journey');
        expect(academicJourneyElement).toBeInTheDocument();
    });

    test('renders current job information', () => {
        render(<Biography />);
        const currentJobElement = screen.getByText('Current Job');
        expect(currentJobElement).toBeInTheDocument();
    });

    test('renders learning journey information', () => {
        render(<Biography />);
        const learningJourneyElement = screen.getByText('Learning Journey');
        expect(learningJourneyElement).toBeInTheDocument();
    });

    test('renders Soft Skills Development information', () => {
        render(<Biography />);
        const softSkillsDevelopmentElement = screen.getByText('Soft Skills Development');
        expect(softSkillsDevelopmentElement).toBeInTheDocument();
    });

    test('renders Collaborative Environment information', () => {
        render(<Biography />);
        const collaborativeEnvironmentElement = screen.getByText('Collaborative Environment');
        expect(collaborativeEnvironmentElement).toBeInTheDocument();
    });
});

describe('Button', () => {
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

jest.mock('react-responsive', () => ({
    useMediaQuery: jest.fn(),
}));

jest.mock('../app/useIsMobile')

describe('Footer', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    test('renders the Footer component', () => {
        render(<Footer />);
        const footerElement = screen.getByText("LET'S GET IN TOUCH");
        expect(footerElement).toBeInTheDocument();
    });

    test('renders button contents', () => {
        render(<Footer />);
        const emailButton = screen.getByText('Email Me');
        const telegramButton = screen.getByText('Telegram');

        expect(emailButton).toBeInTheDocument();
        expect(telegramButton).toBeInTheDocument();
    })
});

