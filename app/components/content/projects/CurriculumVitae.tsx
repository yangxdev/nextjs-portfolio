import React from "react";
import Button from "@ui/Button";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsDesktop } from "@functional/useIsDesktop";
import NewButton from "../../ui/NewButton";
import GithubIcon from "@/public/icons/githubIcon";
import { CiShare1 } from "react-icons/ci";
import { IoIosShareAlt } from "react-icons/io";
import Badge from "../../ui/Badge";

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
            <h1 className="text-3xl text-center text-[#f0f0f0] mb-4 font-bold">Curriculum Vitae</h1>
            <div className="badges flex flex-row justify-center items-center mb-4 gap-2">
                <Badge label="React" bgColor="#61dafb" />
                <Badge label="Tailwind CSS" bgColor="#06b6d4" />
                <Badge label="TypeScript" bgColor="#007acc" />
                <Badge label="Vercel" bgColor="#39393" />
            </div>
            <div className="text-center text-sm mb-4 w-[90%] md:w-[80%] flex flex-col justify-center items-center ml-auto mr-auto">
                Not satisfied with online resume makers, I initially decided to build my own interactive CV using React and Tailwind CSS. The project is open-source and can be viewed on GitHub.
                <br />
                {!isDesktop && <strong>Note: the fully interactive CV can be viewed from this website on desktop only.</strong>}
            </div>
            <div className="flex justify-center">
                {isDesktop ? (
                    <>
                        <div className="flex flex-col w-full gap-4">
                            <div className="gap-4 flex h-[45px] flex-row justify-center">
                                <NewButton url="cv/XIANG_CV.pdf" icon={<IoIosShareAlt />} label="View CV" />
                                <NewButton url="https://github.com/yangxdev/nextjs-cv/" icon={<GithubIcon />} label="GitHub Repository" />
                            </div>
                            <embed src="https://nextjs-cv-snowy.vercel.app/" className="rounded-xl" style={{ width: "100%", height: "120vh" }} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="h-[45px] flex flex-row justify-center">
                            <NewButton url="cv/XIANG_CV.pdf" icon={<IoIosShareAlt />} label="View CV" />
                            <div className="mx-2"></div>
                            <NewButton url="https://github.com/yangxdev/nextjs-cv/" icon={<GithubIcon />} label="GitHub Repository" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default withFadeIn(CurriculumVitae);
// export default CurriculumVitae;
