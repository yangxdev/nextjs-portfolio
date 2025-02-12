import React from "react";
import { Link } from "react-scroll";
import "./Summary.css";

interface SummaryElementProps {
    icon?: JSX.Element;
    emoji?: string;
    title: string;
    description: string;
    sectionId: string;
}

const SummaryElement: React.FC<SummaryElementProps> = ({ icon, emoji, title, description, sectionId }) => (
    <Link to={sectionId} smooth={true} duration={750} offset={-100}>
        <div className="summary-element text-sm flex items-center border p-4 px-5 hover:bg-accent hover:text-background ease-in-out duration-200 justify-between rounded-2xl
        md:my-4
        my-2
        ">
            <div className="col">
                <div className="text-lg font-bold flex flex-row items-center gap-2">
                    {icon} {emoji} {title}
                </div>
                {/* {description} */}
            </div>
            {/* <div className="arrow-sign col pl-4 mb-1 text-4xl font-extralight">{">"}</div> */}
        </div>
    </Link>
);

export default SummaryElement;
