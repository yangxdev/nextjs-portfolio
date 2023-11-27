import React from "react";
import Button from "./Button";

export default function Biography() {

    const biographyButtons: { type: 'main'; content: string; onClick?: () => void }[] = [
        { type: 'main', content: 'LinkedIn Profile', onClick: () => window.open('https://www.linkedin.com/in/yangxng/', '_blank') },
    ];

    return (
        <div id="Biography" className="biography max-w-5xl mx-40 py-20 h-full select-none border-b border-slate-700">
            <div className="biography-text flex flex-row">
                <div className="biography-text-col1 text-xl mr-8">
                    <p>
                        <strong>Academic Journey</strong><br/>
                        After completing my high school education in Information Technology, I pursued my passion for computers and enrolled in the Computer Science program at University of Milan-Bicocca. During my time there, I gained a solid foundation in programming, algorithm, and software development methodologies
                    </p>
                    
                    <p>
                        <br/>
                        <strong>Current Job</strong><br/>
                        I am currently working as a Full-stack Developer at Deloitte Digital, where I contribute to the development of a globally used e-commerce booking platform. In this position, I have been fortunate to collaborate with a team of talented professionals, enhancing my skills in both front-end and back-end development.
                    </p>

                    <div className="text-base mt-4">
                        {biographyButtons.map((button, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <span className="divider mx-1 opacity-50 select-none">/</span>}
                                <Button type={button.type} content={button.content} onClick={button.onClick} />
                            </React.Fragment>
                        ))}
                    </div>

                </div>
                <div className="biography-text-col2 text-sm">
                    <p>
                        <strong>Learning Journey</strong><br/>
                        One of the most significant aspects of my career as a software engineer has been the opportunity to work on various projects throughout my high school years, university and in the free time. Through these projects I have gained proficiency in technologies such as JavaScript (React.js, Next.js) and CSS (SASS, Tailwind CSS).
                    </p>

                    <p>
                        <br/>
                        <strong>Soft Skills Development</strong><br/>
                        In addition to technical expertise, I have also honed my soft skills throughout my career, particularly since joining Deloitte. Working in a dynamic and diverse environment has allowed me to develop effective communication and collaboration skills. I have learned the importance of stro\ng teamwork, adaptibility, and problem-solving abilities.
                    </p>

                    <p>
                        <br/>
                        <strong>Collaborative Environment</strong><br/>
                        As part of a cross-functional team composed of professionals from various regions in Italy and abroad, I have learned the importance of producing code that seamlessly integrates with others'. Leveraging version control systems like Git, our team ensures smooth collaboration while maintaining code integrity. Furthermore, effective communication in English has fostered a global mindset and cultural exchange within our team.
                    </p>
                </div>
            </div>
        </div>
    );
}
