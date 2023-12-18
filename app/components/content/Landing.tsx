import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import withFadeIn from '@functional/withFadeIn';
import { useIsMobile } from '@functional/useIsMobile';
import Button from '@ui/Button';
import LogoSmall from '@logos/logo_small_gray.jpg';

function Landing() {
    const technologies = [
        "Javascript",
        "jQuery",
        "Typescript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Java",
        "Agile",
        "UX",
        "UI"
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

    const isMobile = useIsMobile();

    return (
        <div data-testid="Landing" id="Welcome" className="landing relative select-none py-20 border-b border-slate-700 flex flex-col
            max-w-5xl 
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <Image
                src={LogoSmall.src}
                alt="YX Logo"
                width={1280}
                height={0}
                className='absolute w-[7rem] place-self-center -left-[35px] -top-[10px] h-auto rounded-xl -z-50 opacity-95'
                draggable={false}
            />
            <div className="landing-text z-1">
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
            </div>
            <div className={`landing-buttons flex max-w-max flex-col mt-8`}>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
                    <div className="mb-4 max-w-fit mr-4">
                        <Link to={'Experience'} smooth={true} duration={750} offset={-100}>
                            <Button type="main" content="Read my Experience" />
                        </Link>
                    </div>
                    <div className="mb-4 max-w-fit mr-4">
                        <Link to={'Curriculum Vitae'} smooth={true} duration={750} offset={-100}>
                            <Button type="main" content="Read my CV" />
                        </Link>
                    </div>
                    <div className="landing-button-email whitespace-nowrap w-fit mb-4 py-2 px-4 font-light border border-slate-500 cursor-pointer hover:bg-accent hover:text-background ease-in-out duration-200 max-w-fit">
                        <a
                            draggable="false"
                            href="mailto:yangxdev@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email Me
                        </a>
                    </div>
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

// export default withFadeIn(Landing);
export default Landing;
