import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Biography from '../app/Biography'
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