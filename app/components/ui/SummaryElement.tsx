import React from "react";
import { Link } from "react-scroll";
import "./Summary.css";

interface SummaryElementProps {
    emoji: string;
    title: string;
    description: string;
    sectionId: string;
}

const SummaryElement: React.FC<SummaryElementProps> = ({ emoji, title, description, sectionId }) => (
    <Link to={sectionId} smooth={true} duration={750} offset={-100}>
        <div className="summary-element hover:py-6 text-sm flex items-center border my-4 p-4 px-5 hover:bg-accent hover:text-background ease-in-out duration-200 justify-between rounded-2xl">
            <div className="col">
                <div className="text-lg font-bold">
                    {emoji} {title}
                </div>
                {description}
            </div>
            <div className="arrow-sign col pl-4 mb-1 text-4xl font-extralight">{">"}</div>
        </div>
    </Link>
);

export default SummaryElement;
