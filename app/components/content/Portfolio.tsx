import React from "react";
import withFadeIn from "@functional/withFadeIn";
import PortfolioElement from "@ui/PortfolioElement";

function Portfolio() {
    const experiences = [
        {
            emoji: "🎓",
            title: "Education",
            description: "Studied Computer Science at the University of Milan. Here I learned the fundamentals of computer science and how to think like a software engineer.",
        },
        {
            emoji: "💼",
            title: "Deloitte Digital",
            description: "My first job as a Software Engineer. Here I learned how to work in a team and how to deliver high-quality software solutions.",
        },
        {
            emoji: "🚀",
            title: "Personal Projects & Freelance",
            description: "While gaining experience in the industry, I worked on personal projects and freelance gigs to further develop my skills and knowledge.",
        },
        {
            emoji: "🎨",
            title: "Frontend Mentor",
            description: "Where design meets code. Here I honed my frontend development skills by bringing thought-provoking website designs to life.",
        },
        {
            emoji: "🎓",
            title: "University Projects",
            description: "My first projects in software development. Here I learned to work for the first time in a team and to deliver software solutions following deadlines and specific requirements.",
        },
    ];

    return (
        <div
            id="Experience"
            className="portfolio max-w-5xl select-none py-20 border-b border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        "
        >
            <h1 className="text-left text-3xl text-white my-4">
                <strong>My experience</strong>
            </h1>
            {experiences.map((experience, index) => (
                <PortfolioElement emoji={experience.emoji} sectionId={experience.title} key={index} title={experience.title} description={experience.description} />
            ))}
        </div>
    );
}

export default withFadeIn(Portfolio);
