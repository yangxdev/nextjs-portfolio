import '@testing-library/jest-dom'
import { useInView } from 'react-intersection-observer'
import { render, screen, fireEvent } from '@testing-library/react'
import { useIsMobile } from '@functional/useIsMobile'
import Biography from '@content/Biography'

jest.mock('react-intersection-observer');

describe('Biography', () => {
    (useInView as jest.Mock).mockImplementation(() => [null, true]);
    test('renders the component', () => {
        render(<Biography />)
        const sectionElement = screen.getByTestId('Biography')
        expect(sectionElement).toBeInTheDocument()
    })

    const testCases = [
        { label: 'Academic Journey', key: 'academicJourneyElement' },
        { label: 'Current Job', key: 'currentJobElement' },
        { label: 'Learning Journey', key: 'learningJourneyElement' },
        { label: 'Soft Skills Development', key: 'softSkillsDevelopmentElement' },
        { label: 'Collaborative Environment', key: 'collaborativeEnvironmentElement' },
    ];

    testCases.forEach(({ label, key }) => {
        test(`renders ${label} information`, () => {
            render(<Biography />);
            const element = screen.getByText(label);
            expect(element).toBeInTheDocument();
        });
    });

});