import React from "react";
import Button from "./Button";

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
        { type: 'main', content: 'Latest work on GitHub', onClick: () => window.open('https://github.com/yangxdev', '_blank') },
        { type: 'main', content: 'Email Me', onClick: () => window.location.href = 'mailto:yangxdev@gmail.com' },
    ];

    return (
        <div id="Welcome" className="landing max-w-5xl mx-40 select-none pt-40 pb-20 border-b border-slate-700">
            <div className="landing-text">
                <div className="landing-text-primary text-3xl">
                    Hi, I&apos;m <span className="text-primary font-bold">Yang</span>, a
                    Software Engineer with a passion for crafting exceptional front-end
                    experiences.
                </div>
                <div className="landing-text-secondary mt-4 text-md font-normal">
                    Currently based in Milan, Italy, I&apos;m a Full-stack Developer at{" "}
                    <span className="text-accent font-semibold">Deloitte Digital</span>,
                    where I bring innovative solutions to life through code and
                    creativity.
                </div>
                <div className="landing-text-tertiary mt-4 text-md">
                    My journey involves:
                    <ul className="list-disc pl-6">
                        <li>Designing and implementing user-friendly interfaces.</li>
                        <li>
                            Collaborating with cross-functional teams to deliver high-quality
                            software solutions.
                        </li>
                        <li>Staying updated with emerging web technologies and trends.</li>
                    </ul>
                </div>
            </div>
            <div className="landing-buttons flex flex-nowrap mt-8">
                {landingButtons.map((button, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span className="divider mx-2"></span>}
                        {button.content === "Email Me" ? (
                            <div className="landing-button-email w-fit py-2 px-4 font-light border border-slate-500 cursor-pointer hover:bg-accent hover:text-background ease-in-out duration-200">
                                <a
                                    draggable="false"
                                    href="mailto:yangxdev@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Email Me
                                </a>
                            </div>
                        ) : (
                            <Button type={button.type} content={button.content} onClick={button.onClick} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="landing-subtitle mt-32 text-sm opacity-70 font-light ">
                {technologies.map((tech, index) => (
                    <React.Fragment key={tech}>
                        {index > 0 && <span className="divider mx-2 opacity-50">/</span>}
                        {tech}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
