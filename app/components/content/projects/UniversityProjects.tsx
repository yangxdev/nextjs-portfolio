import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import withFadeIn from '@functional/withFadeIn';
import { useIsMobile } from '@functional/useIsMobile';
import Button from '@ui/Button';
import SDIndex800 from '@university/SD_index_800.gif';
import SDIndex600 from '@university/SD_index_600.gif';
import SDTransfer800 from '@university/SD_transfer_800.gif';
import SDTransfer600 from '@university/SD_transfer_600.gif';
import PDMSmooviePreview from '@university/PDM_smoovie_preview.png';
import PDMSmooviePreviewMobile from '@university/PDM_smoovie_preview_mobile.png';
import NewButton from '../../ui/NewButton';
import { IoIosShareAlt } from 'react-icons/io';
import GithubIcon from '@/public/icons/githubIcon';

function UniversityProjects() {

    const isMobile = useIsMobile();

    return (
        <div id="University Projects" className="university-projects max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
            ">
            <h1 className="text-3xl text-left text-[#f0f0f0] font-bold">University Projects</h1>
            {/* <h3 className='text-lg text-left text-[#f0f0f0] mt-2'>From September 2020 to July 2023</h3> */}
            <h3 className="text-lg text-left text-[#f0f0f0] mt-2">From 2022</h3>
            <br />
            {/* Having enrolled in a Computer Science degree at the University of Milan-Bicocca, I had the opportunity to work on some interesting projects. Here are the most relevant ones:
            <br />
            <br /> */}

            <div className="fm-row flex flex-col" id='distributedSystemsProject'>
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? ( //desktop
                        <div className={`img-desktop max-w-2xl`}>
                            <Image
                                src={SDIndex800.src}
                                alt="Distributed Systems Home Demo GIF 800px"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                            <Image
                                src={SDTransfer800.src}
                                alt="Disitributed Systems Transfer Demo GIF 800px"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl mt-6'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    ) : ( //mobile
                        <div className={`img-mobile max-w-full`}>
                            <Image
                                src={SDIndex600.src}
                                alt="Distributed Systems Home Demo GIF 600px"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                            <Image
                                src={SDTransfer600.src}
                                alt="Disitributed Systems Transfer Demo GIF 600px"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl mt-6'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}
                </div>
                <div className="fm-col1 flex-1 text-start mt-4">
                    <h2 className="mb-1 text-2xl font-bold text-[#f0f0f0]">
                        Distributed Systems Course Project: Flask Banking System
                    </h2>
                    <h3 className="mb-4 text-lg text-[#f0f0f0]">June 2022</h3>
                    <div className="text-sm">
                        For the Distributed Systems course, our task was to develop a website that would allow users to manage their bank accounts. The website had to be developed using the Flask framework and had to be able to communicate with a server-side API and a database. The website had to be able to perform the following operations:
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>Search a user by ID</li>
                            <li>View user balance</li>
                            <li>View user transactions</li>
                            <li>Make a deposit</li>
                            <li>Make a withdrawal</li>
                            <li>Make a transfer to another user</li>
                        </ul>
                    </div>
                    <div className="row mt-4 flex flex-nowrap justify-left">
                        {/* <Button type="main" content="View Code"
                            onClick={() => window.open('https://github.com/washedDragonyx/flask-banking-system')
                            } /> */}
                            <NewButton url="https://github.com/washedDragonyx/flask-banking-system" icon={<GithubIcon />} label="GitHub Repository" />
                        {/* <div className="mx-2"></div>
                        <Button type="main" content="Preview Site"
                            onClick={() => window.open('https://yangxdev.github.io/fe2-faq-accordion/')}
                        /> */}
                    </div>
                </div>
            </div>
            <br /><br />

            <div className="fm-row flex flex-col" id='mobileDevicesProgrammingProject'>
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            <Image
                                src={PDMSmooviePreview.src}
                                alt="PDM Smoovie Preview"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-screen`}>
                            <Image
                                src={PDMSmooviePreviewMobile.src}
                                alt="PDM Smoovie Preview"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}
                </div>
                <div className="fm-col1 flex-1 text-start mt-4">
                    <h2 className="mb-1 text-2xl font-bold text-[#f0f0f0]">
                        Mobile Devices Programming Project: Smoovie
                    </h2>
                    <h3 className="mb-4 text-lg text-[#f0f0f0]">August 2022 to September 2022</h3>
                    <div className="text-sm">
                        For the Mobile Devices Programming course, our task was to develop an Android application that would allow users to search for movies and TV shows. The application had to be developed using the Android Studio IDE and had to be able to communicate with a server-side API. The application had to be able to perform the following operations:
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>Search for movies according to user&apos;s criteria</li>
                            <li>Real-time information gathering thanks to TMDB&apos;s API</li>
                            <li>Local saving of user&apos;s favorite movies</li>
                            <li>Authentication and account management</li>
                        </ul>
                    </div>
                    <div className="row mt-4 flex flex-wrap justify-left h-[45px]">
                        <div className={`button-mobile-wrapper ${isMobile ? 'mb-2' : ''}`}>
                            {/* <Button type="main" content="View Code"
                                onClick={() => window.open('https://github.com/Enkosz/smoovie')
                                } /> */}
                            <NewButton url="https://github.com/Enkosz/smoovie" icon={<GithubIcon />} label="GitHub Repository" />
                        </div>
                        <div className={`mx-2`}></div>
                        <div className={`button-mobile-wrapper ${isMobile ? 'mb-2' : ''}`}>
                            {/* <Button type="main" content="View Documentation"
                                onClick={() => window.open("/PDM_smoovie_documentation.pdf/")}
                            /> */}
                            <NewButton url="/PDM_smoovie_documentation.pdf" icon={<IoIosShareAlt />} label="View Documentation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withFadeIn(UniversityProjects);