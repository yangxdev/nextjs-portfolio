import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsMobile } from "@functional/useIsMobile";
import Button from "@ui/Button";
import SDIndex800 from "@university/SD_index_800.gif";
import SDIndex600 from "@university/SD_index_600.gif";
import SDTransfer800 from "@university/SD_transfer_800.gif";
import SDTransfer600 from "@university/SD_transfer_600.gif";
import PDMSmooviePreview from "@university/PDM_smoovie_preview.png";
import PDMSmooviePreviewMobile from "@university/PDM_smoovie_preview_mobile.png";
import NewButton from "../../ui/NewButton";
import { IoIosShareAlt } from "react-icons/io";
import GithubIcon from "@/public/icons/githubIcon";
import Badge from "../../ui/Badge";
import { MdSchool } from "react-icons/md";

function UniversityProjects() {
    const isMobile = useIsMobile();

    return (
        <div
            id="University Projects"
            className="university-projects max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
            "
        >
            <h1 className="text-3xl text-center text-[#f0f0f0] font-bold">University Projects</h1>
            {/* <h3 className='text-lg text-left text-[#f0f0f0] mt-2'>From September 2020 to July 2023</h3> */}
            <h3 className="text-lg text-center text-[#f0f0f0] mt-2 flex flex-row gap-2 items-center justify-center">
                <MdSchool />
                From 2022
            </h3>
            <br />
            {/* Having enrolled in a Computer Science degree at the University of Milan-Bicocca, I had the opportunity to work on some interesting projects. Here are the most relevant ones:
            <br />
            <br /> */}

            <div className="fm-row flex flex-col" id="distributedSystemsProject">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? ( //desktop
                        <div className={`img-desktop max-w-2xl`}>
                            <Image src={SDIndex800.src} alt="Distributed Systems Home Demo GIF 800px" width={5000} height={0} className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                            <Image src={SDTransfer800.src} alt="Disitributed Systems Transfer Demo GIF 800px" width={5000} height={0} className="w-full h-auto rounded-xl mt-6" draggable={false} priority={true} />
                        </div>
                    ) : (
                        //mobile
                        <div className={`img-mobile max-w-full`}>
                            <Image src={SDIndex600.src} alt="Distributed Systems Home Demo GIF 600px" width={5000} height={0} className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                            <Image src={SDTransfer600.src} alt="Disitributed Systems Transfer Demo GIF 600px" width={5000} height={0} className="w-full h-auto rounded-xl mt-6" draggable={false} priority={true} />
                        </div>
                    )}
                </div>
                <div className="fm-col1 flex-1 text-center mt-4">
                    <h2 className="mb-1 text-2xl font-bold text-[#f0f0f0]">Distributed Systems Course Project: Flask Banking System</h2>
                    <h3 className="mb-4 text-lg text-[#f0f0f0]">June 2022</h3>
                    <div className="badges flex flex-row mb-4 items-center justify-center gap-2">
                        <Badge label="Python" bgColor="#3776ab" />
                        <Badge label="Javascript" bgColor="#f7df1e" />
                        <Badge label="GitHub" bgColor="#2b3137" />
                    </div>
                    <div className="text-sm">
                        For the Distributed Systems course, our task was to develop a website that would allow users to manage their bank accounts. The website had to be developed using the Flask framework and had to be able to communicate with a server-side API and a database. The website had to be
                        able to perform the following operations:
                        {/* <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>Search a user by ID</li>
                            <li>View user balance</li>
                            <li>View user transactions</li>
                            <li>Make a deposit</li>
                            <li>Make a withdrawal</li>
                            <li>Make a transfer to another user</li>
                        </ul> */}
                        <div className="flex flex-row flex-wrap gap-2 justify-center items-center w-[50%] ml-auto mr-auto mt-2">
                            <Badge label="Search a user by ID" bgColor="#2b3137" />
                            <Badge label="View user balance" bgColor="#2b3137" />
                            <Badge label="View user transactions" bgColor="#2b3137" />
                            <Badge label="Make a deposit" bgColor="#2b3137" />
                            <Badge label="Make a withdrawal" bgColor="#2b3137" />
                            <Badge label="Make a transfer to another user" bgColor="#2b3137" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-wrap h-[60px] items-center justify-center">
                        <NewButton url="https://github.com/washedDragonyx/flask-banking-system" icon={<GithubIcon />} label="GitHub Repository" />
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div className="fm-row flex flex-col" id="mobileDevicesProgrammingProject">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            <Image src={PDMSmooviePreview.src} alt="PDM Smoovie Preview" width={5000} height={0} className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-screen`}>
                            <Image src={PDMSmooviePreviewMobile.src} alt="PDM Smoovie Preview" width={5000} height={0} className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                        </div>
                    )}
                </div>
                <div className="fm-col1 flex-1 text-center mt-4">
                    <h2 className="mb-1 text-2xl font-bold text-[#f0f0f0]">Mobile Devices Programming Project: Smoovie</h2>
                    <h3 className="mb-4 text-lg text-[#f0f0f0]">August 2022 to September 2022</h3>
                    <div className="badges flex flex-row mb-4 justify-center items-center gap-2">
                        <Badge label="Android Studio" bgColor="#A4C639" />
                        <Badge label="Java" bgColor="#E11E22" />
                        <Badge label="GitHub" bgColor="#2b3137" />
                    </div>
                    <div className="text-sm">
                        For the Mobile Devices Programming course, our task was to develop an Android application that would allow users to search for movies and TV shows. The application had to be developed using the Android Studio IDE and had to be able to communicate with a server-side API. The
                        application had to be able to perform the following operations:
                        <div className="flex flex-row flex-wrap gap-2 justify-center items-center w-[50%] ml-auto mr-auto mt-2">
                            <Badge label="Search for movies according to user's criteria" bgColor="#2b3137" />
                            <Badge label="Real-time information gathering thanks to TMDB's API" bgColor="#2b3137" />
                            <Badge label="Local saving of user's favorite movies" bgColor="#2b3137" />
                            <Badge label="Authentication and account management" bgColor="#2b3137" />
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 flex-wrap justify-center h-[60px] items-center">
                        <NewButton url="https://github.com/Enkosz/smoovie" icon={<GithubIcon />} label="GitHub Repository" />
                        <NewButton url="/PDM_smoovie_documentation.pdf" icon={<IoIosShareAlt />} label="View Documentation" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withFadeIn(UniversityProjects);
