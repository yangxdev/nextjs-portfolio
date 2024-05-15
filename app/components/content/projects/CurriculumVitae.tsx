import React from "react";
import Button from "@ui/Button";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsDesktop } from "@functional/useIsDesktop";
import NewButton from "../../ui/NewButton";
import GithubIcon from "@/public/icons/githubIcon";
import { CiShare1 } from "react-icons/ci";
import { IoIosShareAlt } from "react-icons/io";

function CurriculumVitae() {
    const isDesktop = useIsDesktop();

    return (
        <div
            id="Curriculum Vitae"
            className="curriculum-vitae max-w-5xl py-20 border-b select-none border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        "
        >
            <h1 className="text-3xl text-left text-[#f0f0f0] mb-4 font-bold">Curriculum Vitae</h1>
            <div className="text-left text-sm mb-4">
                Not satisfied with online resume makers, I taught myself React.js and Next.js to craft a personalized CV tailored to my needs. The challenging yet fulfilling process not only enhanced my skills but also resulted in a unique tool showcasing my qualifications and experiences.
                <br />
                <strong>Note: the full interactive CV can be viewed from this website on desktop only.</strong>
            </div>
            <div className="flex justify-start">
                {isDesktop ? (
                    <>
                        <div className="flex flex-col w-full gap-4">
                            <div className="gap-4 flex h-[45px]">
                                <NewButton url="cv/XIANG_CV.pdf" icon={<IoIosShareAlt />} label="View CV" />
                                <NewButton url="https://github.com/yangxdev/nextjs-cv/" icon={<GithubIcon />} label="GitHub Repository" />
                            </div>
                            <embed src="https://nextjs-cv-snowy.vercel.app/" className="rounded-xl" style={{ width: "100%", height: "120vh" }} />
                        </div>
                    </>
                ) : (
                    <>
                        <NewButton url="cv/XIANG_CV.pdf" icon={<IoIosShareAlt />} label="View CV" />
                        <div className="mx-2"></div>
                        <NewButton url="https://github.com/yangxdev/nextjs-cv/" icon={<GithubIcon />} label="GitHub Repository" />
                    </>
                )}
            </div>
        </div>
    );
}

export default withFadeIn(CurriculumVitae);
// export default CurriculumVitae;
