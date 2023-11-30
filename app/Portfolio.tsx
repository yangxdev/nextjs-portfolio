import React from 'react';
import PortfolioElement from './PortfolioElement';

export default function Portfolio() {
    const experiences = [
        {
            title: 'Deloitte Digital',
            description: 'My first job as a Software Engineer. Here I learned how to work in a team and how to deliver high-quality software solutions.',
        },
        {
            title: 'University',
            description: 'Studied Computer Science at the University of Milan. Here I learned the fundamentals of computer science and how to think like a software engineer.',
        },
        {
            title: 'Frontend Mentor',
            description: 'Where design meets code. Here I honed my frontend development skills by bringing thought-provoking website designs to life.',
        },
    ];

    return (
        <div id='Experience' className="portfolio max-w-5xl select-none py-20 border-b border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-left text-3xl text-white my-4"><strong>My experience</strong></h1>
            {experiences.map((experience, index) => (
                <PortfolioElement sectionId={experience.title} key={index} {...experience} />
            ))}
        </div>
    );
}