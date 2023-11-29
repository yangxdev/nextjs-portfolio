import React from "react";
import Button from "./Button";
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Landing() {
    const technologies = [
        "Javascript",
        "jQuery",
        "Typescript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Java",
        "Agile"
    ];

    const landingButtons: { type: 'main'; content: string; onClick?: () => void }[] = [
        // { type: 'main', content: 'Latest work on GitHub', onClick: () => window.open('https://github.com/yangxdev', '_blank') },
        // { type: 'main', content: 'Visit my LinkedIn profile', onClick: () => window.open('https://www.linkedin.com/in/yangxng', '_blank') },
        // { 
        //     type: 'main', 
        //     content: "Call Me",
        //     onClick: () => window.location.href = 'tel:+393342229699' 
        // },
        { type: 'main', content: "Read my journey" },
        { type: 'main', content: 'Email Me', onClick: () => window.location.href = 'mailto:yangxdev@gmail.com' },
    ];

    return (
        <div id="Welcome" className="landing select-none py-20 border-b border-slate-700 flex flex-col
            max-w-full 
            ml-6 mr-6
            sm:ml-12
            md:ml-[8rem]
        ">
            <div className="landing-text 
                ">
                <div className="landing-text-primary text-xl lg:text-3xl">
                    Hi, I&apos;m <span className="text-primary font-bold">Yang</span>, a
                    Software Engineer with a passion for crafting exceptional front-end
                    experiences.
                </div>
                <div className="landing-text-secondary mt-4 text-md font-normal">
                    Currently based in <strong>Milan, Italy</strong>, I&apos;m a Full-stack Developer at{" "}
                    <span className="text-accent font-semibold">Deloitte Digital</span>,
                    where I bring innovative solutions to life through code and
                    creativity.
                </div>
                {/* <div className="landing-text-tertiary mt-4 text-md">
                    My journey involves:
                    <ul className="list-disc pl-6">
                        <li>Designing and implementing user-friendly interfaces.</li>
                        <li>
                            Collaborating with cross-functional teams to deliver high-quality
                            software solutions.
                        </li>
                        <li>Staying updated with emerging web technologies and trends.</li>
                    </ul>
                </div> */}
            </div>
            <div className="landing-buttons flex max-w-max flex-col lg:mx-20 mt-8">
                <div className="mb-4 max-w-fit">
                    <Link to={'Experience'} smooth={true} duration={750} offset={-100}>
                        <Button type="main" content="View my Journey" />
                    </Link>
                </div>
                <div className="mb-4 max-w-fit">
                    <Link to={'Curriculum Vitae'} smooth={true} duration={750} offset={-100}>
                        <Button type="main" content="Read my CV" />
                    </Link>
                </div>
                <div className="landing-button-email whitespace-nowrap w-fit py-2 px-4 font-light border border-slate-500 cursor-pointer hover:bg-accent hover:text-background ease-in-out duration-200 max-w-fit">
                    <a
                        draggable="false"
                        href="mailto:yangxdev@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email Me
                    </a>
                </div>

                <div className="landing-subtitle mt-12 text-sm opacity-70 font-light max-w-full flex flex-wrap">
                    {technologies.map((tech, index) => (
                        <React.Fragment key={tech}>
                            {index > 0 && <span className="divider mx-2 opacity-50">/</span>}
                            {tech}
                        </React.Fragment>
                    ))}
                </div>
            </div >
        </div>
    );
}
