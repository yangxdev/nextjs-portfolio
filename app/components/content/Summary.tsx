import React from "react";
import withFadeIn from "@functional/withFadeIn";
import SummaryElement from "@ui/SummaryElement";
import { IoBook, IoSchool } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";

function Summary() {
    const experiences = [
        {
            icon: <IoBook />,
            title: "Education",
            description: "Studied Computer Science at the University of Milan. Here I learned the fundamentals of computer science and how to think like a software engineer.",
        },
        {
            icon: <FaSuitcase />,
            title: "Work",
            description: "Working as a Full-stack Developer at AdKaora, previously at Deloitte Digital. Here I contributed to the development of a globally used e-commerce booking platform.",
        },
        {
            icon: <FaRocket />,
            title: "Personal Projects",
            description: "While gaining experience in the industry, I worked on personal projects and freelance gigs to further develop my skills and knowledge.",
        },
        // {
        //     icon: <FaPencilRuler />,
        //     title: "Frontend Mentor",
        //     description: "Challenging myself with Frontend Mentor projects. Here I learned the fundamentals of front-end development and how to work with modern technologies.",
        // },
        {
            icon: <IoSchool />,
            title: "Projects: University",
            description: "My first projects in software development. Here I learned to work for the first time in a team and to deliver software solutions following deadlines and specific requirements.",
        },
    ];

    return (
        <div
            id="Experience"
            className="summary max-w-5xl select-none py-20 border-b border-slate-700
            w-full
            mx-6
            md:mx-20
            lg:mx-40
        "
        >
            <h1 className="text-left text-3xl text-[#f0f0f0] my-4">
                <strong>My experience</strong>
            </h1>
            <h2>
                Press one of the following sections to learn more!
            </h2>
            <div className="summaries-wrapper flex flex-col md:flex-row md:gap-3 gap-0">
                {experiences.map((experience, index) => (
                    <SummaryElement
                        icon={experience.icon}
                        sectionId={experience.title}
                        key={index}
                        title={experience.title}
                        description={experience.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default withFadeIn(Summary);
