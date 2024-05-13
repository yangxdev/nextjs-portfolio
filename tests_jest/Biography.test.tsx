import '@testing-library/jest-dom'
import { useInView } from 'react-intersection-observer'
import { render, screen, fireEvent } from '@testing-library/react'
import { useIsMobile } from '@functional/useIsMobile'
import Timeline from '@content/Timeline'

jest.mock('react-intersection-observer');

xdescribe('Timeline', () => {
    (useInView as jest.Mock).mockImplementation(() => [null, true]);
    test('renders the component', () => {
        render(<Timeline />)
        const sectionElement = screen.getByTestId('Timeline')
        expect(sectionElement).toBeInTheDocument()
    })

    const testCases = [
        { label: 'Academic Journey', key: 'academicJourneyElement' },
        { label: 'Current Job', key: 'currentJobElement' },
        // { label: 'Learning Journey', key: 'learningJourneyElement' },
        // { label: 'Soft Skills Development', key: 'softSkillsDevelopmentElement' },
        // { label: 'Collaborative Environment', key: 'collaborativeEnvironmentElement' },
    ];

    testCases.forEach(({ label, key }) => {
        test(`renders ${label} information`, () => {
            render(<Timeline />);
            const element = screen.getByText(label);
            expect(element).toBeInTheDocument();
        });
    });

});