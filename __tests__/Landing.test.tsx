import '@testing-library/jest-dom'
import { useInView } from 'react-intersection-observer'
import { render, screen, fireEvent } from '@testing-library/react'
import { useIsMobile } from '@functional/useIsMobile'
import Landing from '@content/Landing'

jest.mock('react-intersection-observer');

describe('Landing', () => {
    (useInView as jest.Mock).mockImplementation(() => [null, true]);
    test('renders the component', () => {
        render(<Landing />)
        const sectionElement = screen.getByTestId('Landing')
        expect(sectionElement).toBeInTheDocument()
        expect(screen.getByTestId('Landing')).toBeInTheDocument();
    })

    it('renders buttons with correct content', () => {
        render(<Landing />);

        const readExperienceButton = screen.getByText(/Read my Experience/i);
        const readCVButton = screen.getByText(/Read my CV/i);
        const emailMeButton = screen.getByText(/Email Me/i);

        expect(readExperienceButton).toBeInTheDocument();
        expect(readCVButton).toBeInTheDocument();
        expect(emailMeButton).toBeInTheDocument();
    })

    it('should test the email button', () => {
        render(<Landing />);

        expect(screen.getByRole('link', { name: 'Email Me' })).toHaveAttribute(
            'href',
            'mailto:yangxdev@gmail.com'
        )
    });
});

