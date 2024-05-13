"use client";
import React, { ReactElement, useEffect, useState } from "react";
import withFadeIn from "@functional/withFadeIn";
import Button from "@ui/Button";
import LinkedinIcon from "@/public/icons/linkedinIcon";
import NewButton from "../ui/NewButton";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { PiEggCrack } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import "@/app/components/content/Timeline.css";

import { MdOutlineViewInAr } from "react-icons/md";

const data = [
    {
        props: {
            date: "March 2024 - Present",
            className: "vertical-timeline-element--work text-[#f0f0f0]",
            contentStyle: { background: "#111", border: "1px solid #fdfdfd", color: "#fdfdfd" },
            contentArrowStyle: { borderRight: "7px solid #fdfdfd" },
            iconStyle: { background: "#0f0f0f", color: "#fdfdfd" },
            icon: <MdComputer />,
        },
        title: "Front-end Developer",
        subtitle: "Freelance",
        location: "Full Remote",
        content: "Crafting exceptional front-end products for clients, specializing in React.js and Next.js.",
    },
    {
        props: {
            date: "March 2023 - Present",
            className: "vertical-timeline-element--work text-[#f0f0f0]",
            contentStyle: { background: "#111", border: "1px solid #fdfdfd", color: "#fdfdfd" },
            contentArrowStyle: { borderRight: "7px solid #fdfdfd" },
            iconStyle: { background: "#0f0f0f", color: "#fdfdfd" },
            icon: <MdWorkOutline />,
        },
        title: "Full-stack Developer",
        subtitle: "Deloitte Digital",
        location: "Milan, MI / Full Remote",
        content: "Contributing to the development of a globally used e-commerce booking platform.",
    },
    {
        props: {
            date: "November 2022 - January 2023",
            className: "vertical-timeline-element--work text-[#f0f0f0]",
            contentStyle: { background: "#111", border: "1px solid #fdfdfd", color: "#fdfdfd" },
            contentArrowStyle: { borderRight: "7px solid #fdfdfd" },
            iconStyle: { background: "#0f0f0f", color: "#fdfdfd" },
            icon: <PiEggCrack />,
        },
        title: "Jr. Full-stack Developer",
        subtitle: "DecHit S.p.A.",
        location: "Milan, MI / Full Remote",
        content: "3-month intensive course focused on full-stack development.",
    },
];

function Timeline() {
    const [elements, setElements] = useState(data.slice(0, 1));
    console.log("elements", elements.length)
    console.log("data", data.length)

    useEffect(() => {
        loadMore();
    }, []);

    const loadMore = () => {
        setElements(data.slice(0, elements.length + 1));
    };

    const getTimelineElements = () =>
        elements.map((element, index) => (
            <VerticalTimelineElement visible={true} key={index} {...element.props}>
                <h3 className="vertical-timeline-element-title font-bold">{element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
                <h5 className="font-light text-sm">{element.location}</h5>
                <p>{element.content}</p>
            </VerticalTimelineElement>
        ));

    return (
        <div data-testid="Timeline" id="Timeline" className="timeline py-20 h-full select-none border-b border-slate-700 max-w-5xl w-full mx-6 md:mx-20 lg:mx-40">
            <div className="text-3xl mb-4 font-bold text-[#f0f0f0] text-left">Timeline</div>
            <VerticalTimeline>
                {getTimelineElements()}
                {elements.length < data.length && (
                    <VerticalTimelineElement
                        visible={true}
                        iconOnClick={loadMore}
                        iconClassName="load-more vertical-timeline-element-icon--button"
                        icon={<FaPlus />}
                        iconStyle={{ background: "#0f0f0f" }}
                        contentStyle={{ background: "#111", border: "1px solid #fdfdfd", color: "#fdfdfd" }}
                        contentArrowStyle={{ borderRight: "7px solid #fdfdfd" }}
                    >
                        Press here to load more
                    </VerticalTimelineElement>
                )}
            </VerticalTimeline>
        </div>
    );
}

export default withFadeIn(Timeline);
