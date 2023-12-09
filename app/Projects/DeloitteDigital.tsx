import React from "react";
import withFadeIn from "../withFadeIn";

function DeloitteDigital() {
    return (
        <div id="Deloitte Digital" className="deloitte-digital max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-white font-bold">Deloitte Digital</h1>
            <h3 className='text-lg text-left text-white mt-2'>From March 2023</h3>
            <br />
            I was fortunate to work with Deloitte Digital, the digital transformation division of the leading Big4 firm, on a significant project involving a Booking Platform. This experience allowed me to thrive in a vibrant environment where technology, creativity, and business strategy intersect. During my time there, I played a key role in developing innovative solutions, contributing substantially to Deloitte&apos;s digital transformation efforts.
            <div className="text-sm text-left">

                <div className="text-base font-bold mt-4">
                    Project:
                </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li>Booking Platform ( <strong>B2B</strong>, B2C )</li>
                    <li>Used by travel agencies in <strong>40+ countries</strong></li>
                    <li>Annual revenue exceeding <strong>4 billion</strong></li>
                </ul>

                <div className="text-base font-bold mt-4">Technologies: </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li><strong>JavaScript</strong> ( jQuery, HandleBars.js )</li>
                    <li><strong>CSS</strong> ( Bootstrap )</li>
                    <li><strong>Java</strong> ( JSP, JSTL )</li>
                    <li><strong>SQL</strong></li>
                    <li><strong>Git</strong> ( GitLab )</li>
                    <li><strong>Agile</strong> ( Jira, Confluence )</li>
                </ul>

                <div className="text-base font-bold mt-4">Details:</div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li>Collaborated in an Agile Scrum environment.</li>
                    <li>Contributed to a cross-functional team of 9, consisting of 2 functional and 7 technical members.</li>
                    <li>Collaborated closely with the UI/UX team to ensure a seamless user experience.</li>
                    <li>Worked in conjunction with an external testing team to validate and enhance product quality.</li>
                    <li>Maintained daily communication with the Technical Project Manager for project coordination and progress updates.</li>
                </ul>

            </div>
        </div>
    );
}

export default withFadeIn(DeloitteDigital);