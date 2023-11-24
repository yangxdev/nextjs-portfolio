import React from 'react';
import PortfolioElement from './PortfolioElement';

export default function Portfolio() {
    const experiences = [
        {
            title: 'University',
            description: 'Studied Computer Science at the University of Milan. Here I learned the fundamentals of computer science and how to think like a software engineer.',
        },
        {
            title: 'Frontend Mentor',
            description: 'Where design meets code. Here I honed my frontend development skills by bringing thought-provoking website designs to life.',
        },
        {
            title: 'Deloitte Digital',
            description: 'My first job as a Software Engineer. Here I learned how to work in a team and how to deliver high-quality software solutions.',
        },
    ];

    return (
        <div className="portfolio max-w-5xl mx-40 select-none py-20 border-b border-slate-700">
            <h1 className="text-left text-4xl text-white my-4">My experience</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem atque quaerat aut molestias non esse animi accusamus! Eveniet nulla quas quod maxime, ullam inventore sequi mollitia nemo dolores impedit?
            {experiences.map((experience, index) => (
                <PortfolioElement key={index} {...experience} />
            ))}
        </div>
    );
}