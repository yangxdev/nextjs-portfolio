"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";
import { useIsDesktop } from "../functional/useIsDesktop";
import Timeline from "@content/Timeline";
import Landing from "@content/Landing";
import Summary from "@content/Summary";
import CurriculumVitae from "@projects/CurriculumVitae";
import DeloitteDigital from "@projects/DeloitteDigital";
import Education from "@projects/Education";
import FrontendMentor from "@projects/FrontendMentor";
import UniversityProjects from "@projects/UniversityProjects";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import ScrollToTopButton from "@ui/ScrollToTopButton";
import PersonalProjects from "../content/projects/PersonalProjects";
import { ScrollPointContext } from "../functional/ScrollPointContext";

const HomePage = ({ onLoaded }: { onLoaded: () => void }) => {
    React.useEffect(() => {
        onLoaded();
    }, [onLoaded]);

    const sections = [
        // { label: "Start", id: "Welcome" },
        { label: "Summary", id: "Experience" },
        { label: "Timeline", id: "Timeline" },
        { label: "Curriculum", id: "Curriculum Vitae" },
        { label: "Education", id: "Education" },
        { label: "Work", id: "Work" },
        { label: "Projects", id: "Personal Projects & Freelance" },
        { label: "University", id: "University Projects" },
        { label: "Contacts", id: "Contact Me" },
    ];

    const isDesktop = useIsDesktop();

    const [scrollPoint, setScrollPoint] = React.useState("");

    return (
        <>
            <ScrollPointContext.Provider value={{ scrollPoint, setScrollPoint }}>
                <div className="flex-col flex main-page h-full w-full items-center justify-center">
                    <div>
                        <Toaster />
                    </div>
                    <Header />
                    {isDesktop && (
                        <div className="scroll-links flex flex-col sticky top-[70px] mr-auto ml-6 z-10">
                            {sections.map((section, index) => (
                                <div className="hover:opacity-80" key={index}>
                                    <ScrollLink to={section.id} smooth={true} duration={500} offset={-140} spy={true} activeClass="opacity-80">
                                        {section.label}
                                    </ScrollLink>
                                </div>
                            ))}
                        </div>
                    )}
                    <Landing />
                    <Summary />
                    <Timeline />
                    <CurriculumVitae />
                    <Education />
                    <DeloitteDigital />
                    <PersonalProjects />
                    <FrontendMentor />
                    <UniversityProjects />
                    <Footer />
                    <ScrollToTopButton />
                </div>
            </ScrollPointContext.Provider>
        </>
    );
};

// DONE: add more links on the left side nav bar
// DONE: add toast to first section's buttons

export default HomePage;
