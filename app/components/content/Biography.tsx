import React, { ReactElement } from "react";
import withFadeIn from "@functional/withFadeIn";
import Button from "@ui/Button";
import LinkedinIcon from "@/public/icons/linkedinIcon";
import NewButton from "../ui/NewButton";

function Biography() {
    // const biographyButtons: { type: "main"; icon: ReactElement; content: string; onClick?: () => void }[] = [{ type: "main", icon: LinkedinIcon, content: "LinkedIn Profile", onClick: () => window.open("https://www.linkedin.com/in/yangxng/", "_blank") }];

    return (
        <div
            data-testid="Biography"
            id="Biography"
            className="biography max-w-5xl py-20 h-full select-none border-b border-slate-700
        mx-6
        md:mx-20
        lg:mx-40
    "
        >
            <div
                className="biography-text flex 
            flex-col
            md:flex-row
            "
            >
                <div
                    className="biography-text-col1 text-base
                md:mr-10
                "
                >
                    <p>
                        <strong>Academic Journey</strong>
                        <br />
                        After completing my high school education in Information Technology, I pursued my passion for computers and enrolled in the <em>Computer Science</em> program at University of Milan-Bicocca. During my time there, I gained a solid foundation in programming, algorithm, and
                        software development methodologies
                    </p>

                    <p>
                        <br />
                        <strong>Current Job</strong>
                        <br />I am currently working as a Full-stack Developer at Deloitte Digital, where I contribute to the development of a globally used <em>e-commerce booking platform</em>. In this position, I have been fortunate to collaborate with a team of talented professionals, enhancing
                        my skills in both front-end and back-end development.
                    </p>

                    <NewButton url="https://www.linkedin.com/in/yangxng/" icon={<LinkedinIcon />} label="Linkedin Profile" />
                </div>
            </div>
        </div>
    );
}

export default withFadeIn(Biography);
